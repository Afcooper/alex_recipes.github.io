/* ============================================================
   The Recipe File — PDF card export
   Generates exact-size 4×6 or 3×5 (landscape) recipe-card PDFs with
   crisp vector text. Reliable to print from any device (incl. phones),
   unlike browser print which mobile browsers handle poorly.

   jsPDF (assets/jspdf.umd.min.js) is loaded lazily on first use.
   Works from disk (file://) and on GitHub Pages.
   ============================================================ */
(function (global) {
  "use strict";

  // points; 1in = 72pt. 4×6 landscape = 432×288, 3×5 landscape = 360×252
  var SIZES = {
    '4x6': { w:432, h:288, m:15, eyebrow:6.5, title:15, statCal:12, stat:8, colH:7, body:8.5, lh:11,
             note:7.5, leftCol:140, gap:14, amtCol:34, pad:4, dot:2.1 },
    '3x5': { w:360, h:252, m:13, eyebrow:6, title:12.5, statCal:10, stat:6.5, colH:6.5, body:7.5, lh:9.6,
             note:6.5, leftCol:112, gap:10, amtCol:28, pad:3, dot:1.8 }
  };

  var INK = [34,31,24], HONEY = [156,90,10], SOFT = [110,103,87], LINE = [210,200,180];
  function diffColor(d){
    d = (d||'').toLowerCase();
    if (d === 'easy') return [122,139,61];
    if (d === 'medium') return [224,163,58];
    if (d === 'hard') return [156,90,10];
    return SOFT;
  }

  /* ---- amount formatting (mirrors the on-screen engine) ---- */
  var FR = [[0,''],[0.125,'1/8'],[0.25,'1/4'],[1/3,'1/3'],[0.375,'3/8'],[0.5,'1/2'],[0.625,'5/8'],[2/3,'2/3'],[0.75,'3/4'],[0.875,'7/8'],[1,'CARRY']];
  function frac(x){
    var whole = Math.floor(x + 1e-9), f = x - whole, best = FR[0], bd = Infinity;
    for (var i=0;i<FR.length;i++){ var d = Math.abs(f - FR[i][0]); if (d < bd){ bd = d; best = FR[i]; } }
    var w = whole, s = best[1];
    if (s === 'CARRY'){ w += 1; s = ''; }
    if (w === 0 && s === '') return x > 0 ? '1/8' : '0';
    if (w === 0) return s;
    return s ? (w + ' ' + s) : String(w);
  }
  function unitDisp(unit, amt){ if (!unit) return ''; if (unit === 'cup' && amt > 1 + 1e-9) return 'cups'; return unit; }
  function amtText(amt, unit){ if (amt == null) return ''; var u = unitDisp(unit, amt); return u ? (frac(amt) + ' ' + u) : frac(amt); }
  function shortName(n){ return String(n||'').split(/[,(]/)[0].trim(); }
  function resolveRefs(content, recipe){
    return String(content||'').replace(/\{(\d{4})\}/g, function(m, id){
      var ing = null, L = recipe.ingredients || [];
      for (var i=0;i<L.length;i++){ if (L[i].id === id){ ing = L[i]; break; } }
      if (!ing) return '';
      var a = amtText(ing.amount, ing.unit);
      return (a ? a + ' ' : '') + shortName(ing.name);
    });
  }

  function sumH(lines){ var t=0; for (var i=0;i<lines.length;i++) t += lines[i].h; return t; }

  /* ---- build wrapped line lists (measure + draw use the same data) ---- */
  function ingredientLines(doc, recipe, width, S){
    var lines = [];
    (recipe.ingredients || []).forEach(function(i){
      doc.setFont('helvetica','normal'); doc.setFontSize(S.body);
      if (i.amount == null){
        var nl = doc.splitTextToSize(i.name || '', width);
        nl.forEach(function(t){ lines.push({ h:S.lh, segs:[{ t:t, x:0, font:'helvetica', style:'normal', size:S.body, color:INK }] }); });
      } else {
        var amt = amtText(i.amount, i.unit);
        var nameW = width - S.amtCol - S.pad;
        var nl = doc.splitTextToSize(i.name || '', nameW);
        nl.forEach(function(t, idx){
          var segs = [];
          if (idx === 0) segs.push({ t:amt, x:S.amtCol, align:'right', font:'helvetica', style:'bold', size:S.body, color:HONEY });
          segs.push({ t:t, x:S.amtCol + S.pad, font:'helvetica', style:'normal', size:S.body, color:INK });
          lines.push({ h:S.lh, segs:segs });
        });
      }
    });
    return lines;
  }

  function methodLines(doc, recipe, width, S){
    var lines = [];
    doc.setFont('helvetica','normal'); doc.setFontSize(S.body);
    var numW = doc.getTextWidth('00.  ');
    (recipe.steps || []).forEach(function(st, n){
      var txt = (st.title ? st.title + ': ' : '') + resolveRefs(st.content, recipe);
      doc.setFont('helvetica','normal'); doc.setFontSize(S.body);
      var tl = doc.splitTextToSize(txt, width - numW);
      tl.forEach(function(t, idx){
        var segs = [];
        if (idx === 0) segs.push({ t:(n+1) + '.', x:0, font:'helvetica', style:'bold', size:S.body, color:HONEY });
        segs.push({ t:t, x:numW, font:'helvetica', style:'normal', size:S.body, color:INK });
        lines.push({ h:S.lh, segs:segs });
      });
      lines.push({ h:S.lh * 0.35, segs:[] });
    });
    if (recipe.notes){
      lines.push({ h:S.lh * 0.9, segs:[{ t:'NOTES', x:0, font:'helvetica', style:'bold', size:S.note, color:HONEY }] });
      recipe.notes.split('\n\n').forEach(function(p){
        doc.setFont('helvetica','italic'); doc.setFontSize(S.note);
        doc.splitTextToSize(p, width).forEach(function(t){
          lines.push({ h:S.lh * 0.92, segs:[{ t:t, x:0, font:'helvetica', style:'italic', size:S.note, color:SOFT }] });
        });
        lines.push({ h:S.lh * 0.3, segs:[] });
      });
    }
    return lines;
  }

  function drawLines(doc, lines, x, yStart, S, paginate, contTitle){
    var y = yStart, bottom = S.h - S.m;
    for (var i=0;i<lines.length;i++){
      var ln = lines[i];
      if (paginate && y + ln.h > bottom){
        doc.addPage([S.w, S.h], 'landscape'); y = S.m;
        if (contTitle){
          doc.setFont('times','italic'); doc.setFontSize(S.stat); doc.setTextColor(SOFT[0],SOFT[1],SOFT[2]);
          doc.text(contTitle + ' (cont.)', x, y + S.stat); y += S.lh;
        }
      }
      for (var j=0;j<ln.segs.length;j++){
        var s = ln.segs[j];
        doc.setFont(s.font, s.style); doc.setFontSize(s.size); doc.setTextColor(s.color[0], s.color[1], s.color[2]);
        doc.text(s.t, x + s.x, y, s.align ? { align:s.align } : undefined);
      }
      y += ln.h;
    }
    return y;
  }

  function colHeading(doc, label, x, y, S){
    doc.setFont('helvetica','bold'); doc.setFontSize(S.colH); doc.setTextColor(HONEY[0],HONEY[1],HONEY[2]);
    doc.text(label, x, y);
    doc.setDrawColor(HONEY[0],HONEY[1],HONEY[2]); doc.setLineWidth(0.8);
    doc.line(x, y + 3, x + doc.getTextWidth(label) + 2, y + 3);
    return y + 7;
  }

  function renderRecipe(doc, r, S){
    var M = S.m, x0 = M, xR = S.w - M, contentW = S.w - 2*M;

    /* ---- stat block (right) ---- */
    var calStr = (r.nutrition && r.nutrition.calories != null) ? (r.nutrition.calories + ' cal') : '';
    var timeStr = r.time || '';
    var diffStr = r.difficulty || '';
    doc.setFont('times','bold'); doc.setFontSize(S.statCal);
    var calW = calStr ? doc.getTextWidth(calStr) : 0;
    doc.setFont('helvetica','normal'); doc.setFontSize(S.stat);
    var timeW = timeStr ? doc.getTextWidth(timeStr) : 0;
    var diffTextW = diffStr ? doc.getTextWidth(diffStr) : 0;
    var dotSpace = diffStr ? (S.dot*2 + 4) : 0;
    var statW = Math.max(calW, timeW, diffTextW + dotSpace);

    var sy = M + S.statCal;
    if (calStr){ doc.setFont('times','bold'); doc.setFontSize(S.statCal); doc.setTextColor(HONEY[0],HONEY[1],HONEY[2]); doc.text(calStr, xR, sy, {align:'right'}); }
    var statBottom = sy;
    doc.setFont('helvetica','normal'); doc.setFontSize(S.stat); doc.setTextColor(SOFT[0],SOFT[1],SOFT[2]);
    if (timeStr){ sy += S.stat + 3; doc.text(timeStr, xR, sy, {align:'right'}); statBottom = sy; }
    if (diffStr){
      sy += S.stat + 3; doc.text(diffStr, xR, sy, {align:'right'});
      var dc = diffColor(diffStr);
      doc.setFillColor(dc[0],dc[1],dc[2]);
      doc.circle(xR - diffTextW - 4 - S.dot, sy - S.stat*0.32, S.dot, 'F');
      statBottom = sy;
    }

    /* ---- header left (eyebrow + title + source) ---- */
    var eyeY = M + S.eyebrow;
    doc.setFont('helvetica','normal'); doc.setFontSize(S.eyebrow); doc.setTextColor(HONEY[0],HONEY[1],HONEY[2]);
    doc.text((r.courses || []).join('  ·  ').toUpperCase(), x0, eyeY);

    var titleMaxW = contentW - statW - S.gap;
    doc.setFont('times','bold'); doc.setFontSize(S.title); doc.setTextColor(INK[0],INK[1],INK[2]);
    var titleLines = doc.splitTextToSize(r.title || '', Math.max(60, titleMaxW));
    var ty = eyeY + S.title;
    titleLines.forEach(function(t){ doc.text(t, x0, ty); ty += S.title * 1.02; });
    var leftBottom = ty - S.title * 1.02;

    if (r.source){
      doc.setFont('helvetica','normal'); doc.setFontSize(S.stat); doc.setTextColor(SOFT[0],SOFT[1],SOFT[2]);
      ty += S.stat; doc.text('from ' + r.source, x0, ty); leftBottom = ty;
    }

    var headerBottom = Math.max(leftBottom, statBottom) + 8;

    /* ---- body: two columns if it fits one card, else single-column paginated ---- */
    var hasIngs = (r.ingredients || []).length > 0;
    var leftW = S.leftCol, rightX = x0 + leftW + S.gap, rightW = xR - rightX;
    var avail = (S.h - M) - headerBottom;
    var ingLines = hasIngs ? ingredientLines(doc, r, leftW, S) : [];
    var methLines = methodLines(doc, r, rightW, S);
    var headingH = 7 + 2;
    var fits = hasIngs && (sumH(ingLines) + headingH) <= avail && (sumH(methLines) + headingH) <= avail;

    if (fits){
      var ly = colHeading(doc, 'INGREDIENTS', x0, headerBottom + S.colH, S);
      drawLines(doc, ingLines, x0, ly, S, false);
      var ry = colHeading(doc, 'METHOD', rightX, headerBottom + S.colH, S);
      drawLines(doc, methLines, rightX, ry, S, false);
    } else {
      var fullW = contentW, y = headerBottom;
      if (hasIngs){
        var iy = colHeading(doc, 'INGREDIENTS', x0, y + S.colH, S);
        y = drawLines(doc, ingredientLines(doc, r, fullW, S), x0, iy, S, true, r.title) + 5;
      }
      if (y + S.colH + S.lh > S.h - M){ doc.addPage([S.w, S.h], 'landscape'); y = M; }
      var my = colHeading(doc, 'METHOD', x0, y + S.colH, S);
      drawLines(doc, methodLines(doc, r, fullW, S), x0, my, S, true, r.title);
    }
  }

  function buildRecipePDF(JsPDF, recipes, sizeKey){
    var S = SIZES[sizeKey] || SIZES['4x6'];
    var doc = new JsPDF({ unit:'pt', format:[S.w, S.h], orientation:'landscape' });
    recipes.forEach(function(r, i){
      if (i > 0) doc.addPage([S.w, S.h], 'landscape');
      renderRecipe(doc, r, S);
    });
    return doc;
  }

  /* ---------- browser wrapper (lazy-loads jsPDF) ---------- */
  function slug(s){ return String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'') || 'recipe'; }
  function loadJsPDF(){
    return new Promise(function(res, rej){
      if (global.jspdf && global.jspdf.jsPDF) return res(global.jspdf.jsPDF);
      var s = document.createElement('script');
      s.src = 'assets/jspdf.umd.min.js';
      s.onload = function(){ (global.jspdf && global.jspdf.jsPDF) ? res(global.jspdf.jsPDF) : rej(new Error('PDF library loaded but unavailable')); };
      s.onerror = function(){ rej(new Error('Could not load the PDF library (assets/jspdf.umd.min.js)')); };
      document.head.appendChild(s);
    });
  }

  var api = {
    SIZES: SIZES,
    buildRecipePDF: buildRecipePDF,
    generate: function(sizeKey, recipes){
      return loadJsPDF().then(function(JsPDF){
        var doc = buildRecipePDF(JsPDF, recipes, sizeKey);
        var name = (recipes.length === 1 ? slug(recipes[0].title) : 'recipe-cards-' + recipes.length) + '-' + sizeKey + '.pdf';
        doc.save(name);
        return name;
      });
    }
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else global.RecipePDF = api;
})(typeof window !== 'undefined' ? window : globalThis);
