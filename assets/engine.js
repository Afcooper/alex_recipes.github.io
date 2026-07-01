/* ============================================================
   The Recipe File — engine
   Rendering, search/filter/sort, servings scaling, step timers,
   collapsible cards, deep-linkable URL hash, and two print modes
   (full page + 3×5 index cards). Zero dependencies.
   Data comes from window.RECIPES (recipes.js), loaded first.
   ============================================================ */
(function () {
  "use strict";

  var RM = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  var data = window.RECIPES;
  if (!Array.isArray(data) || !data.length) {
    document.body.innerHTML =
      '<pre style="padding:2rem;font-family:monospace;line-height:1.6">' +
      'recipes.js failed to load or has a syntax error.\n' +
      'Open the browser console for the exact line, then check recipes.js.</pre>';
    return;
  }

  /* ---------- taxonomy: tag groups for the filter drawer ---------- */
  var TAG_GROUPS = [
    ['Protein',  ['chicken','beef','pork','bacon','sausage','ham','seafood','shrimp','salmon','scallops','fish','eggs','beans','vegetarian','vegan']],
    ['Cuisine',  ['mexican','tex-mex','italian','asian','chinese','japanese','american']],
    ['Method',   ['slow-cooker','crock-pot','no-bake','baked','roasted','grilled','stovetop','stir-fry','air-fryer','one-pan','freezer-friendly','make-ahead','overnight']],
    ['Type',     ['cookie','cake','candy','fudge','frosting','bread','rolls','pizza','pasta','rice','potato','casserole','soup','stew','salad','slaw','dip','salsa','sauce','glaze','marinade','dressing','burger']],
    ['Diet',     ['low-carb','gluten-free']],
    ['Occasion', ['holiday','christmas','thanksgiving','party','potluck','game-day','cookout','kid-friendly','weeknight','meal-prep']]
  ];

  /* ---------- number -> nice cooking fraction ---------- */
  var FR = [[0,''],[0.125,'⅛'],[0.25,'¼'],[1/3,'⅓'],[0.375,'⅜'],[0.5,'½'],[0.625,'⅝'],[2/3,'⅔'],[0.75,'¾'],[0.875,'⅞'],[1,'CARRY']];
  function frac(x){
    var whole = Math.floor(x + 1e-9);
    var f = x - whole;
    var best = FR[0], bd = Infinity;
    for (var i=0;i<FR.length;i++){ var d = Math.abs(f - FR[i][0]); if (d < bd){ bd = d; best = FR[i]; } }
    var w = whole, s = best[1];
    if (s === 'CARRY'){ w += 1; s = ''; }
    if (w === 0 && s === '') return x > 0 ? '⅛' : '0';
    if (w === 0) return s;
    return s ? (w + s) : String(w);
  }
  function unitDisp(unit, amt){
    if (!unit) return '';
    if (unit === 'cup' && amt > 1 + 1e-9) return 'cups';
    return unit;
  }
  function amtText(amt, unit){
    if (amt == null) return '';
    var u = unitDisp(unit, amt);
    return u ? (frac(amt) + ' ' + u) : frac(amt);
  }
  function shortName(name){ return name.split(/[,(]/)[0].trim(); }
  // Escapes &, <, > AND quotes, so values are safe both as text and inside
  // double/single-quoted HTML attributes (defense-in-depth; the build also
  // rejects "<"/">" at publish time).
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }

  function human(sec){
    if (sec < 60) return sec + ' sec';
    if (sec < 3600) return (sec % 60 === 0 ? (sec/60) : Math.round(sec/60)) + ' min';
    return (sec % 3600 === 0 ? (sec/3600) : (sec/3600).toFixed(1)) + ' hr';
  }
  function mmss(sec){
    var m = Math.floor(sec/60), s = sec % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  /* ---------- derive a numeric time (minutes) for sorting ---------- */
  function timeMinutes(str){
    if (!str) return Infinity;
    var s = str.toLowerCase(), total = 0, found = false, m;
    var re = /(\d+(?:\.\d+)?)\s*(hr|hour|hours|h|min|minutes|minute|m)\b/g;
    while ((m = re.exec(s))){
      found = true;
      var n = parseFloat(m[1]);
      total += /^h/.test(m[2]) ? n * 60 : n;
    }
    if (/overnight/.test(s)) { total += 720; found = true; }
    return found ? total : Infinity;
  }

  /* ---------- prep each recipe: search index + derived fields ---------- */
  data.forEach(function (r, i) {
    r._i = i;
    r.courses = r.courses || [];
    r.tags = r.tags || [];
    r.ingredients = r.ingredients || [];
    r.steps = r.steps || [];
    r._title = (r.title || '').toLowerCase();
    r._timeMin = timeMinutes(r.time);
    r._servings = r.baseServings;
    r._mult = 1;
    r._hay = [
      r.title, r.desc, r.source,
      r.courses.join(' '),
      r.tags.join(' '),
      r.ingredients.map(function(x){ return x.name; }).join(' '),
      r.steps.map(function(s){ return (s.title || '') + ' ' + (s.content || ''); }).join(' ')
    ].join('  ').toLowerCase();
  });

  data.forEach(function (r) {
    r._diffRank = ({ Easy:0, Medium:1, Hard:2 })[r.difficulty]; if (r._diffRank == null) r._diffRank = 9;
    r._cal = (r.nutrition && typeof r.nutrition.calories === 'number') ? r.nutrition.calories : null;
  });

  /* ---------- state ---------- */
  var state = { q:'', courses:[], tags:[], diffs:[], cals:[], sort:'az', open:{} };

  /* ---------- DOM refs ---------- */
  var $ = function(id){ return document.getElementById(id); };
  var elQ = $('q'), elQClear = $('q-clear'), elCourseChips = $('course-chips'),
      elSort = $('sort'), elMore = $('more-filters'), elFilterCount = $('filter-count'),
      elDrawer = $('filter-drawer'), elCount = $('result-count'), elPills = $('active-pills'),
      elClearAll = $('clear-all'), elIndex = $('index'), elCards = $('cards'), elZero = $('zero');

  /* ---------- inline step content with live amount spans ---------- */
  function renderContent(recipe, content, mult){
    var safe = esc(content);
    return safe.replace(/\{(\d{4})\}/g, function(m, iid){
      var ing = null;
      for (var i=0;i<recipe.ingredients.length;i++){ if (recipe.ingredients[i].id === iid){ ing = recipe.ingredients[i]; break; } }
      if (!ing || ing.amount == null) return ing ? esc(shortName(ing.name)) : m;
      return '<span class="ref"><span class="ramt" data-base="' + ing.amount + '" data-unit="' + esc(ing.unit || '') + '">'
           + esc(amtText(ing.amount * mult, ing.unit)) + '</span> ' + esc(shortName(ing.name)) + '</span>';
    });
  }

  function timerHTML(sec){
    if (!sec) return '';
    if (sec >= 3600) return '<span class="timer static">⏲ ' + human(sec) + '</span>';
    return '<button class="timer" type="button" data-sec="' + sec + '" aria-label="Start ' + human(sec) + ' timer">⏲ ' + human(sec) + '</button>';
  }

  /* ---------- serving unit + nutrition panel ---------- */
  function servingUnit(label){
    var map = { 'Servings':'serving', 'Cookies':'cookie', 'Pizzas':'pizza', 'Rolls':'roll', 'Pieces':'piece', 'Dozen':'dozen', 'Cups':'cup', 'Pies':'pie', 'Loaves':'loaf', 'Bars':'bar', 'Muffins':'muffin' };
    var l = label || 'Servings';
    return map[l] || (l.toLowerCase().replace(/s$/, '') || 'serving');
  }
  function nutritionHTML(recipe, unit){
    var n = recipe.nutrition;
    if (!n || n.calories == null) return '';
    function macro(v, k){ return '<li><span class="nut-v">' + (v == null ? '–' : v + 'g') + '</span><span class="nut-k">' + k + '</span></li>'; }
    return '<aside class="nutrition" aria-label="Estimated nutrition per ' + esc(unit) + '">'
      + '<p class="nut-h">Per ' + esc(unit) + '</p>'
      + '<p class="nut-cal"><span class="nut-cal-n">' + n.calories + '</span> cal</p>'
      + '<ul class="nut-macros">' + macro(n.protein, 'Protein') + macro(n.carbs, 'Carbs') + macro(n.fat, 'Fat') + '</ul>'
      + '<p class="nut-cap">Estimated · per ' + esc(unit) + '</p>'
      + '</aside>';
  }

  /* ---------- one card ---------- */
  function cardHTML(recipe){
    var mult = recipe._mult || 1;
    var open = !!state.open[recipe.id];

    var ings = recipe.ingredients.map(function(i){
      if (i.amount == null)
        return '<li class="ing noamt"><span class="ing-name">' + esc(i.name) + '</span></li>';
      return '<li class="ing"><span class="amt" data-base="' + i.amount + '" data-unit="' + esc(i.unit || '') + '">'
           + esc(amtText(i.amount * mult, i.unit)) + '</span><span class="ing-name">' + esc(i.name) + '</span></li>';
    }).join('');

    var steps = recipe.steps.map(function(st, n){
      return '<li class="stepi"><span class="num">' + (n+1) + '</span><div class="stepbody">'
           + (st.title ? '<div class="stept">' + esc(st.title) + '</div>' : '')
           + '<div class="stepc">' + renderContent(recipe, st.content, mult) + '</div>'
           + timerHTML(st.timer) + '</div></li>';
    }).join('');

    var unit = servingUnit(recipe.servingsLabel);
    var nut = nutritionHTML(recipe, unit);
    var hasIngs = recipe.ingredients.length > 0;
    var hasSteps = recipe.steps.length > 0;
    var bodyInner = '';
    if (hasIngs) bodyInner += '<div class="col col-ings">' + nut + '<h3 class="col-h">Ingredients</h3><ul class="ings">' + ings + '</ul></div>';
    else if (nut) bodyInner += '<div class="col col-ings">' + nut + '</div>';
    if (hasSteps) bodyInner += '<div class="col col-steps"><h3 class="col-h">Method</h3><ol class="steps">' + steps + '</ol></div>';
    var body = bodyInner ? '<div class="body' + (hasIngs ? '' : ' no-ings') + '">' + bodyInner + '</div>' : '';

    var notes = recipe.notes ? '<div class="notes"><p class="notes-h">Notes</p>'
      + recipe.notes.split('\n\n').map(function(p){ return '<p>' + esc(p) + '</p>'; }).join('') + '</div>' : '';

    var tagchips = recipe.tags.map(function(t){
      return '<button class="tagchip" type="button" data-tag="' + esc(t) + '">' + esc(t) + '</button>';
    }).join('');

    var srv = '';
    if (recipe.baseServings != null){
      var lab = recipe.servingsLabel || 'Servings';
      srv = '<span class="servings"><span class="srvlabel">' + esc(lab) + (recipe.servingsEstimated ? '<span class="srv-est" title="Serving count is an estimate">≈</span>' : '') + '</span>'
          + '<span class="srvgroup">'
          + '<button class="srvbtn minus" type="button" aria-label="Fewer">−</button>'
          + '<span class="srvcount" aria-live="polite">' + recipe._servings + '</span>'
          + '<button class="srvbtn plus" type="button" aria-label="More">+</button>'
          + '</span></span>';
    }
    var statCal = recipe._cal != null
      ? '<div class="stat-cal"><span class="stat-cal-n">' + recipe._cal + '</span> cal</div><div class="stat-sub">per ' + esc(unit) + '</div>'
      : '';
    var statTime = recipe.time ? '<div class="stat-line">⏱ ' + esc(recipe.time) + '</div>' : '';
    var statDiff = recipe.difficulty ? '<div class="stat-line diff" data-diff="' + esc(recipe.difficulty.toLowerCase()) + '"><span class="diff-dot" aria-hidden="true"></span>' + esc(recipe.difficulty) + '</div>' : '';
    var statBlock = (statCal || statTime || statDiff) ? '<aside class="card-stats" aria-label="At a glance">' + statCal + statTime + statDiff + '</aside>' : '';
    var metaRow = srv ? '<div class="meta">' + srv + '</div>' : '';

    return '<article class="card anim ' + (open ? 'is-open' : 'is-collapsed') + '" id="recipe-' + recipe.id + '" data-ri="' + recipe._i + '">'
      + '<div class="card-head"><div class="card-head-main">'
      + '<p class="cat">' + esc(recipe.courses.join(' · ')) + '</p>'
      + '<h2 class="title">' + esc(recipe.title) + '</h2>'
      + (recipe.source ? '<p class="src">from ' + esc(recipe.source) + '</p>' : '')
      + (recipe.desc ? '<p class="desc">' + esc(recipe.desc) + '</p>' : '')
      + '</div>' + statBlock + '</div>'
      + (tagchips ? '<div class="card-tags">' + tagchips + '</div>' : '')
      + metaRow
      + (body || notes ? '<button class="card-toggle" type="button" aria-expanded="' + open + '">'
          + '<span class="ct-label">' + (open ? 'Hide recipe' : 'View recipe') + '</span> <span class="chev">▾</span></button>' : '')
      + body + notes
      + '</article>';
  }

  /* ---------- filtering / sorting ---------- */
  function matchesQuery(r, q){
    if (!q) return true;
    var terms = q.split(/\s+/).filter(Boolean);
    return terms.every(function(t){ return r._hay.indexOf(t) !== -1; });
  }
  function calBucket(c){ return c == null ? null : (c < 400 ? 'light' : (c <= 650 ? 'medium' : 'hearty')); }
  function passesFilters(r){
    if (state.courses.length && !state.courses.some(function(c){ return r.courses.indexOf(c) !== -1; })) return false;
    if (!state.tags.every(function(t){ return r.tags.indexOf(t) !== -1; })) return false;
    if (state.diffs.length && state.diffs.indexOf((r.difficulty || '').toLowerCase()) === -1) return false;
    if (state.cals.length){ var b = calBucket(r._cal); if (!b || state.cals.indexOf(b) === -1) return false; }
    return true;
  }
  var sorters = {
    az:     function(a,b){ return a._title.localeCompare(b._title); },
    time:   function(a,b){ return (a._timeMin - b._timeMin) || a._title.localeCompare(b._title); },
    course: function(a,b){ return (a.courses[0]||'').localeCompare(b.courses[0]||'') || a._title.localeCompare(b._title); },
    kcal:   function(a,b){ return ((a._cal==null?1e9:a._cal) - (b._cal==null?1e9:b._cal)) || a._title.localeCompare(b._title); },
    diff:   function(a,b){ return (a._diffRank - b._diffRank) || a._title.localeCompare(b._title); }
  };

  function currentList(){
    var q = state.q.toLowerCase();
    var list = data.filter(function(r){ return matchesQuery(r,q) && passesFilters(r); });
    list.sort(sorters[state.sort] || sorters.az);
    return list;
  }

  /* ---------- index (grouped) ---------- */
  function groupKey(r){
    if (state.sort === 'course') return r.courses[0] || 'Other';
    if (state.sort === 'time') return r.time ? 'By time' : 'Time not listed';
    if (state.sort === 'kcal') return r._cal == null ? 'Not estimated' : (r._cal < 400 ? 'Light · under 400 cal' : (r._cal <= 650 ? 'Medium · 400–650 cal' : 'Hearty · 650+ cal'));
    if (state.sort === 'diff') return r.difficulty || 'Unrated';
    return (r._title[0] || '#').toUpperCase();
  }
  function indexHTML(list){
    var html = '', lastG = null;
    list.forEach(function(r){
      var g = groupKey(r);
      if (g !== lastG){
        var cnt = list.filter(function(x){ return groupKey(x) === g; }).length;
        html += '<h2 class="index-group">' + esc(g) + ' <span class="index-group-n">' + cnt + '</span></h2>';
        lastG = g;
      }
      var meta = (r.courses[0] ? esc(r.courses[0]) : '') + (r.time ? ' · ' + esc(r.time) : '');
      html += '<a class="index-row" href="#recipe-' + r.id + '" data-jump="' + r.id + '">'
        + '<span class="index-name">' + esc(r.title) + '</span>'
        + '<span class="index-dots"></span>'
        + '<span class="index-meta">' + meta + '</span>'
        + '</a>';
    });
    return html;
  }

  /* ---------- active-filter pills ---------- */
  function pillsHTML(){
    var p = [];
    if (state.q) p.push('<button class="pill" data-kind="q" aria-label="Remove search filter">“' + esc(state.q) + '” <span class="pill-x">×</span></button>');
    state.courses.forEach(function(c){ p.push('<button class="pill" data-kind="course" data-val="' + esc(c) + '" aria-label="Remove filter ' + esc(c) + '">' + esc(c) + ' <span class="pill-x">×</span></button>'); });
    state.tags.forEach(function(t){ p.push('<button class="pill" data-kind="tag" data-val="' + esc(t) + '" aria-label="Remove filter ' + esc(t) + '">' + esc(t) + ' <span class="pill-x">×</span></button>'); });
    var CAP = function(s){ return s.charAt(0).toUpperCase() + s.slice(1); };
    state.diffs.forEach(function(d){ p.push('<button class="pill" data-kind="diff" data-val="' + esc(d) + '" aria-label="Remove difficulty ' + esc(d) + '">' + esc(CAP(d)) + ' <span class="pill-x">×</span></button>'); });
    state.cals.forEach(function(c){ p.push('<button class="pill" data-kind="cal" data-val="' + esc(c) + '" aria-label="Remove calories ' + esc(c) + '">' + esc(CAP(c)) + ' cal <span class="pill-x">×</span></button>'); });
    return p.join('');
  }

  /* ---------- main render ---------- */
  var firstRender = true;
  function apply(){
    var list = currentList();

    // count
    var active = state.q || state.courses.length || state.tags.length || state.diffs.length || state.cals.length;
    elCount.textContent = list.length + (list.length === 1 ? ' recipe' : ' recipes') + (active ? ' of ' + data.length : '');

    // pills + clear-all + filter badge
    elPills.innerHTML = pillsHTML();
    elClearAll.hidden = !active;
    var nDrawerF = state.tags.length + state.diffs.length + state.cals.length;
    elFilterCount.hidden = nDrawerF === 0;
    elFilterCount.textContent = nDrawerF;

    // course chip pressed states
    Array.prototype.forEach.call(elCourseChips.querySelectorAll('.chip'), function(ch){
      var c = ch.getAttribute('data-course');
      var on = c === 'all' ? state.courses.length === 0 : state.courses.indexOf(c) !== -1;
      ch.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    // zero state
    if (!list.length){
      elZero.hidden = false; elIndex.hidden = true; elCards.hidden = true;
      return;
    }
    elZero.hidden = true; elIndex.hidden = false; elCards.hidden = false;

    elIndex.innerHTML = indexHTML(list)
      + '<span class="hint">Tap a recipe to open it · use <b>−</b>/<b>+</b> to rescale · <b>⏲</b> to start a timer</span>';
    elCards.innerHTML = list.map(cardHTML).join('');

    // entrance animation (initial load only, capped stagger)
    if (firstRender && !RM){
      var cardEls = elCards.querySelectorAll('.card.anim');
      Array.prototype.forEach.call(cardEls, function(c, i){
        c.style.transitionDelay = Math.min(i, 12) * 40 + 'ms';
        requestAnimationFrame(function(){ c.classList.add('in'); });
      });
    } else {
      Array.prototype.forEach.call(elCards.querySelectorAll('.card.anim'), function(c){ c.classList.add('in'); });
    }
    firstRender = false;

    writeHash();
  }

  /* ---------- servings scaling ---------- */
  function applyServings(card){
    var r = data[+card.dataset.ri];
    r._mult = r.baseServings ? (r._servings / r.baseServings) : 1;
    var count = card.querySelector('.srvcount');
    if (count) count.textContent = r._servings;
    var amts = card.querySelectorAll('.amt, .ramt');
    for (var i=0;i<amts.length;i++){
      var el = amts[i];
      var base = parseFloat(el.getAttribute('data-base'));
      var unit = el.getAttribute('data-unit') || null;
      el.textContent = amtText(base * r._mult, unit);
      if (!RM){ el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash'); }
    }
  }

  /* ---------- timers ---------- */
  var audioCtx = null;
  function beep(){
    try{
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      var o = audioCtx.createOscillator(), g = audioCtx.createGain();
      o.connect(g); g.connect(audioCtx.destination);
      o.type = 'sine'; o.frequency.value = 880;
      g.gain.setValueAtTime(0.0001, audioCtx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.25, audioCtx.currentTime + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);
      o.start(); o.stop(audioCtx.currentTime + 0.5);
    }catch(e){}
  }
  var timerState = new WeakMap();
  function setTimerLabel(btn, txt){ btn.textContent = '⏲ ' + txt; }
  function stopTick(st){ if (st.iv){ clearInterval(st.iv); st.iv = null; } }
  function handleTimer(btn){
    var sec = parseInt(btn.getAttribute('data-sec'), 10);
    var st = timerState.get(btn);
    if (!st){ st = { state:'idle', remaining: sec, iv:null }; timerState.set(btn, st); }
    if (st.state === 'idle' || st.state === 'paused'){
      if (st.state === 'idle') st.remaining = sec;
      st.state = 'running';
      btn.classList.remove('paused','done'); btn.classList.add('running');
      setTimerLabel(btn, mmss(st.remaining));
      st.iv = setInterval(function(){
        st.remaining -= 1;
        if (st.remaining <= 0){
          stopTick(st); st.state = 'done';
          btn.classList.remove('running','paused'); btn.classList.add('done');
          setTimerLabel(btn, 'Done ✓'); beep(); return;
        }
        setTimerLabel(btn, mmss(st.remaining));
      }, 1000);
    } else if (st.state === 'running'){
      stopTick(st); st.state = 'paused';
      btn.classList.remove('running'); btn.classList.add('paused');
      setTimerLabel(btn, mmss(st.remaining) + ' ⏸');
    } else if (st.state === 'done'){
      st.state = 'idle'; st.remaining = sec;
      btn.classList.remove('done','running','paused');
      setTimerLabel(btn, human(sec));
    }
  }

  /* ---------- card open/close ---------- */
  function setOpen(card, open){
    var r = data[+card.dataset.ri];
    state.open[r.id] = open;
    card.classList.toggle('is-open', open);
    card.classList.toggle('is-collapsed', !open);
    var tg = card.querySelector('.card-toggle');
    if (tg){ tg.setAttribute('aria-expanded', open); var lab = tg.querySelector('.ct-label'); if (lab) lab.textContent = open ? 'Hide recipe' : 'View recipe'; }
  }

  /* ---------- delegated clicks on #cards ---------- */
  elCards.addEventListener('click', function(e){
    var sb = e.target.closest('.srvbtn');
    if (sb){
      var card = sb.closest('.card');
      var r = data[+card.dataset.ri];
      if (sb.classList.contains('plus')) r._servings += 1;
      else r._servings = Math.max(1, r._servings - 1);
      applyServings(card);
      return;
    }
    var tb = e.target.closest('button.timer');
    if (tb){ handleTimer(tb); return; }
    var tag = e.target.closest('.tagchip');
    if (tag){ addTag(tag.getAttribute('data-tag')); return; }
    var tg = e.target.closest('.card-toggle');
    if (tg){ var c = tg.closest('.card'); setOpen(c, !c.classList.contains('is-open')); return; }
  });

  /* ---------- index row -> open + scroll ---------- */
  elIndex.addEventListener('click', function(e){
    var row = e.target.closest('.index-row');
    if (!row) return;
    e.preventDefault();
    openAndScroll(row.getAttribute('data-jump'));
  });
  function openAndScroll(id){
    var card = $('recipe-' + id);
    if (!card) return;
    setOpen(card, true);
    card.scrollIntoView({ behavior: RM ? 'auto' : 'smooth', block: 'start' });
  }

  /* ---------- filter mutators ---------- */
  function addTag(t){ if (state.tags.indexOf(t) === -1){ state.tags.push(t); syncDrawer(); apply(); } }
  function removeTag(t){ state.tags = state.tags.filter(function(x){ return x !== t; }); syncDrawer(); apply(); }
  function toggleCourse(c){
    if (c === 'all'){ state.courses = []; }
    else { var i = state.courses.indexOf(c); if (i === -1) state.courses.push(c); else state.courses.splice(i,1); }
    apply();
  }

  /* ---------- build course chips + tag drawer from data ---------- */
  function countBy(fn){ var m = {}; data.forEach(function(r){ fn(r).forEach(function(k){ m[k] = (m[k]||0)+1; }); }); return m; }
  function buildChips(){
    var counts = countBy(function(r){ return r.courses; });
    // order courses by the canonical sequence, only those present
    var ORDER = ['Breakfast','Lunch','Dinner','Appetizer','Side','Salad','Soup','Bread','Sauce','Dressing','Marinade','Dip','Dessert','Snack','Drink','Basics'];
    var present = ORDER.filter(function(c){ return counts[c]; });
    Object.keys(counts).forEach(function(c){ if (present.indexOf(c) === -1) present.push(c); });
    var html = '<button class="chip" data-course="all" aria-pressed="true">All <span class="chip-n">' + data.length + '</span></button>';
    present.forEach(function(c){
      html += '<button class="chip" data-course="' + esc(c) + '" aria-pressed="false">' + esc(c) + ' <span class="chip-n">' + counts[c] + '</span></button>';
    });
    elCourseChips.innerHTML = html;
  }
  function buildDrawer(){
    var counts = countBy(function(r){ return r.tags; });
    var used = {};
    var html = '';
    TAG_GROUPS.forEach(function(g){
      var name = g[0], tags = g[1].filter(function(t){ return counts[t]; });
      if (!tags.length) return;
      html += '<div class="fd-group"><p class="fd-h">' + esc(name) + '</p><div class="fd-tags">';
      tags.forEach(function(t){ used[t] = 1; html += '<button class="chip fd-chip" type="button" data-tag="' + esc(t) + '" aria-pressed="false">' + esc(t) + ' <span class="chip-n">' + counts[t] + '</span></button>'; });
      html += '</div></div>';
    });
    var other = Object.keys(counts).filter(function(t){ return !used[t]; }).sort();
    if (other.length){
      html += '<div class="fd-group"><p class="fd-h">More</p><div class="fd-tags">';
      other.forEach(function(t){ html += '<button class="chip fd-chip" type="button" data-tag="' + esc(t) + '" aria-pressed="false">' + esc(t) + ' <span class="chip-n">' + counts[t] + '</span></button>'; });
      html += '</div></div>';
    }
    // difficulty group
    var dc = { easy:0, medium:0, hard:0 };
    data.forEach(function(r){ var d = (r.difficulty || '').toLowerCase(); if (dc[d] != null) dc[d]++; });
    html += '<div class="fd-group"><p class="fd-h">Difficulty</p><div class="fd-tags">'
      + ['easy','medium','hard'].map(function(d){ return '<button class="chip fd-filter" type="button" data-kind="diff" data-val="' + d + '" aria-pressed="false">' + d.charAt(0).toUpperCase()+d.slice(1) + ' <span class="chip-n">' + dc[d] + '</span></button>'; }).join('')
      + '</div></div>';
    // calories group
    var cc = { light:0, medium:0, hearty:0 };
    data.forEach(function(r){ var b = calBucket(r._cal); if (b) cc[b]++; });
    html += '<div class="fd-group"><p class="fd-h">Calories (per serving)</p><div class="fd-tags">'
      + [['light','Light · under 400'],['medium','Medium · 400–650'],['hearty','Hearty · 650+']].map(function(x){ return '<button class="chip fd-filter" type="button" data-kind="cal" data-val="' + x[0] + '" aria-pressed="false">' + x[1] + ' <span class="chip-n">' + cc[x[0]] + '</span></button>'; }).join('')
      + '</div>'
      + '<p class="fd-note">Nutrition is estimated from ingredients — treat it as a guide, not a label.</p></div>';
    elDrawer.innerHTML = html;
  }
  function syncDrawer(){
    Array.prototype.forEach.call(elDrawer.querySelectorAll('.fd-chip'), function(ch){
      ch.setAttribute('aria-pressed', state.tags.indexOf(ch.getAttribute('data-tag')) !== -1 ? 'true' : 'false');
    });
    Array.prototype.forEach.call(elDrawer.querySelectorAll('.fd-filter'), function(ch){
      var kind = ch.getAttribute('data-kind'), val = ch.getAttribute('data-val');
      var on = (kind === 'diff' ? state.diffs : state.cals).indexOf(val) !== -1;
      ch.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  /* ---------- URL hash (deep-linkable, future "recipe books") ---------- */
  function writeHash(){
    var p = [];
    if (state.q) p.push('q=' + encodeURIComponent(state.q));
    if (state.courses.length) p.push('course=' + encodeURIComponent(state.courses.join(',')));
    if (state.tags.length) p.push('tags=' + encodeURIComponent(state.tags.join(',')));
    if (state.diffs.length) p.push('diff=' + encodeURIComponent(state.diffs.join(',')));
    if (state.cals.length) p.push('cal=' + encodeURIComponent(state.cals.join(',')));
    if (state.sort !== 'az') p.push('sort=' + state.sort);
    var h = p.join('&');
    try { history.replaceState(null, '', h ? '#' + h : location.pathname + location.search); } catch(e){}
  }
  function readHash(){
    var h = location.hash.replace(/^#/, '');
    if (!h) return null;
    if (h.indexOf('=') === -1) return h.indexOf('recipe-') === 0 ? h.slice(7) : null; // legacy anchor
    h.split('&').forEach(function(kv){
      var i = kv.indexOf('='); if (i === -1) return;
      var k = kv.slice(0,i), v = decodeURIComponent(kv.slice(i+1));
      if (k === 'q') state.q = v;
      else if (k === 'course') state.courses = v.split(',').filter(Boolean);
      else if (k === 'tags') state.tags = v.split(',').filter(Boolean);
      else if (k === 'diff') state.diffs = v.split(',').filter(Boolean);
      else if (k === 'cal') state.cals = v.split(',').filter(Boolean);
      else if (k === 'sort') state.sort = v;
    });
    return null;
  }

  /* ---------- print modes ---------- */
  var pageStyle = document.createElement('style');
  document.head.appendChild(pageStyle);
  var CARD_PAGE = {
    '3x5': '@media print{ @page { size: 5in 3.5in; margin: 0.18in; } }',
    '4x6': '@media print{ @page { size: 6in 4in; margin: 0.2in; } }'
  };
  function setCardPage(mode){
    pageStyle.textContent = (mode && CARD_PAGE[mode]) ? CARD_PAGE[mode] : '@media print{ @page { size: auto; margin: 0.5in; } }';
  }
  setCardPage(null);
  function expandAllForPrint(){
    // expand every card so print shows full recipes
    Array.prototype.forEach.call(elCards.querySelectorAll('.card'), function(c){ c.classList.remove('is-collapsed'); c.classList.add('is-open'); });
  }
  function printCards(mode){
    document.body.classList.remove('print-3x5', 'print-4x6');
    if (mode) document.body.classList.add('print-' + mode);
    setCardPage(mode);
    expandAllForPrint();
    window.print();
  }

  /* ---------- wire controls ---------- */
  var dt;
  elQ.addEventListener('input', function(){
    clearTimeout(dt);
    dt = setTimeout(function(){ state.q = elQ.value.trim(); elQClear.hidden = !state.q; apply(); }, 90);
  });
  elQ.addEventListener('keydown', function(e){ if (e.key === 'Escape'){ elQ.value=''; state.q=''; elQClear.hidden=true; apply(); elQ.blur(); } });
  elQClear.addEventListener('click', function(){ elQ.value=''; state.q=''; elQClear.hidden=true; apply(); elQ.focus(); });

  elCourseChips.addEventListener('click', function(e){
    var ch = e.target.closest('.chip'); if (!ch) return;
    toggleCourse(ch.getAttribute('data-course'));
  });
  elSort.addEventListener('change', function(){ state.sort = elSort.value; apply(); });

  elMore.addEventListener('click', function(){
    var open = elDrawer.classList.toggle('open');
    elMore.setAttribute('aria-expanded', open);
    if (open) syncDrawer();
  });
  elDrawer.addEventListener('click', function(e){
    var ff = e.target.closest('.fd-filter');
    if (ff){
      var kind = ff.getAttribute('data-kind'), val = ff.getAttribute('data-val');
      var arr = kind === 'diff' ? state.diffs : state.cals;
      var i = arr.indexOf(val); if (i === -1) arr.push(val); else arr.splice(i, 1);
      syncDrawer(); apply(); return;
    }
    var ch = e.target.closest('.fd-chip'); if (!ch) return;
    var t = ch.getAttribute('data-tag');
    if (state.tags.indexOf(t) === -1) addTag(t); else removeTag(t);
  });

  elPills.addEventListener('click', function(e){
    var pill = e.target.closest('.pill'); if (!pill) return;
    var kind = pill.getAttribute('data-kind'), val = pill.getAttribute('data-val');
    if (kind === 'q'){ elQ.value=''; state.q=''; elQClear.hidden=true; }
    else if (kind === 'course'){ state.courses = state.courses.filter(function(c){ return c !== val; }); }
    else if (kind === 'tag'){ state.tags = state.tags.filter(function(t){ return t !== val; }); syncDrawer(); }
    else if (kind === 'diff'){ state.diffs = state.diffs.filter(function(d){ return d !== val; }); syncDrawer(); }
    else if (kind === 'cal'){ state.cals = state.cals.filter(function(c){ return c !== val; }); syncDrawer(); }
    apply();
  });
  elClearAll.addEventListener('click', function(){
    state.q=''; state.courses=[]; state.tags=[]; state.diffs=[]; state.cals=[]; elQ.value=''; elQClear.hidden=true; syncDrawer(); apply();
  });

  // global keyboard: "/" or Cmd/Ctrl-K focuses search
  document.addEventListener('keydown', function(e){
    var typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement && document.activeElement.tagName);
    if ((e.key === '/' && !typing) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')){
      e.preventDefault(); elQ.focus(); elQ.select();
    }
  });

  var pf = $('print-full'), p3 = $('print-3x5'), p4 = $('print-4x6');
  if (pf) pf.addEventListener('click', function(){ document.body.classList.remove('print-3x5', 'print-4x6'); setCardPage(null); expandAllForPrint(); window.print(); });
  if (p3) p3.addEventListener('click', function(){ printCards('3x5'); });
  if (p4) p4.addEventListener('click', function(){ printCards('4x6'); });
  window.addEventListener('afterprint', function(){ document.body.classList.remove('print-3x5', 'print-4x6'); setCardPage(null); });

  // ---- PDF download (lazy-loads jsPDF; reliable to print from a phone) ----
  function downloadPDF(size, btn){
    if (!window.RecipePDF){ alert('PDF feature is still loading — try again in a moment.'); return; }
    var list = currentList();
    if (!list.length){ return; }
    if (list.length > 40 && !confirm('Make a PDF of all ' + list.length + ' recipes shown?\n\nTip: search or filter first to get just the cards you want.')) return;
    var prev = btn.textContent; btn.disabled = true; btn.textContent = 'Building…';
    Promise.resolve(window.RecipePDF.generate(size, list))
      .then(function(){ btn.disabled = false; btn.textContent = prev; })
      .catch(function(e){ alert('Could not make the PDF: ' + (e && e.message ? e.message : e)); btn.disabled = false; btn.textContent = prev; });
  }
  var pdf4 = $('pdf-4x6'), pdf3 = $('pdf-3x5');
  if (pdf4) pdf4.addEventListener('click', function(){ downloadPDF('4x6', pdf4); });
  if (pdf3) pdf3.addEventListener('click', function(){ downloadPDF('3x5', pdf3); });

  /* ---------- make an overflowing row reachable: drag (mouse) + wheel + native touch ---------- */
  function enableDragScroll(el){
    var down = false, moved = false, startX = 0, startLeft = 0, pid = null;
    el.addEventListener('pointerdown', function(e){
      if (e.pointerType === 'touch') return; // let mobile use native swipe
      down = true; moved = false; startX = e.clientX; startLeft = el.scrollLeft; pid = e.pointerId;
    });
    el.addEventListener('pointermove', function(e){
      if (!down) return;
      var dx = e.clientX - startX;
      if (!moved && Math.abs(dx) > 4){ moved = true; el.classList.add('dragging'); try { el.setPointerCapture(pid); } catch(_){} }
      if (moved){ el.scrollLeft = startLeft - dx; e.preventDefault(); }
    });
    function end(){
      if (down && moved){ // swallow the click that would otherwise toggle a chip after a drag
        var sup = function(ev){ ev.stopPropagation(); ev.preventDefault(); };
        el.addEventListener('click', sup, true);
        setTimeout(function(){ el.removeEventListener('click', sup, true); }, 0);
      }
      down = false; el.classList.remove('dragging');
    }
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', end);
  }
  function enableWheelScroll(el){
    el.addEventListener('wheel', function(e){
      if (el.scrollWidth <= el.clientWidth) return;
      var d = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (d){ el.scrollLeft += d; e.preventDefault(); }
    }, { passive:false });
  }

  /* ---------- init ---------- */
  buildChips();
  buildDrawer();
  enableDragScroll(elCourseChips);
  enableWheelScroll(elCourseChips);
  var jumpId = readHash();
  if (state.q) elQ.value = state.q;
  if (state.q) elQClear.hidden = false;
  elSort.value = state.sort;
  apply();
  if (jumpId){ state.open[jumpId] = true; apply(); setTimeout(function(){ openAndScroll(jumpId); }, 30); }

  // keep sticky offsets correct
  function setToolbarH(){ var t = document.querySelector('.toolbar'); if (t) document.documentElement.style.setProperty('--toolbar-h', t.offsetHeight + 'px'); }
  setToolbarH(); window.addEventListener('resize', setToolbarH);
})();
