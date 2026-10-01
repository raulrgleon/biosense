"use strict";

var year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

var menuBtn = document.querySelector(".menu-btn");
var drawer = document.getElementById("drawer");
if (menuBtn && drawer) {
  menuBtn.addEventListener("click", function () {
    var open = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!open));
    menuBtn.setAttribute("aria-label", open ? "Abrir menú" : "Cerrar menú");
    drawer.hidden = open;
  });
  drawer.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      drawer.hidden = true;
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("aria-label", "Abrir menú");
    });
  });
}

document.querySelectorAll(".copy-btn").forEach(function (btn) {
  var original = btn.textContent;
  btn.addEventListener("click", function () {
    var text = btn.getAttribute("data-copy") || "";
    navigator.clipboard.writeText(text).then(function () {
      btn.textContent = "Copiado";
      setTimeout(function () { btn.textContent = original; }, 1600);
    }).catch(function () {
      btn.textContent = text;
    });
  });
});

(function scope() {
  var canvas = document.getElementById("scope");
  var clock = document.getElementById("clock");
  if (!canvas || !canvas.getContext) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ctx = canvas.getContext("2d");
  var t0 = performance.now();
  var raf = 0;

  function resize() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var cssW = canvas.clientWidth || 720;
    var cssH = Math.max(200, Math.round(cssW * 0.38));
    canvas.style.height = cssH + "px";
    canvas.width = Math.round(cssW * dpr);
    canvas.height = Math.round(cssH * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function glucose(t) {
    var base = 0.22 * Math.sin(t * 0.7);
    var meal = 0.72 * Math.exp(-Math.pow((t % 11) - 4.2, 2) / 3.6);
    var jitter = 0.04 * Math.sin(t * 6.2);
    return base + meal + jitter;
  }
  function oxygen(t) {
    return 0.34 * Math.sin(t * 0.38 + 1.1) + 0.1 * Math.sin(t * 1.4);
  }
  function temp(t) {
    return 0.12 * Math.sin(t * 0.22 + 0.4) + 0.03 * Math.sin(t * 1.8);
  }

  function drawTrace(fn, color, t, w, h, mid) {
    ctx.beginPath();
    var n = Math.floor(w);
    for (var i = 0; i <= n; i += 2) {
      var x = i;
      var u = t - (w - i) / 46;
      var y = mid - fn(u) * h * 0.42;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.6;
    ctx.stroke();
  }

  function frame(now) {
    var w = canvas.clientWidth || 720;
    var h = parseFloat(canvas.style.height) || 220;
    var t = (now - t0) / 1000;

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#070908";
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = "rgba(242,238,230,0.06)";
    ctx.lineWidth = 1;
    for (var g = 1; g < 4; g++) {
      var y = (h / 4) * g;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    ctx.strokeStyle = "rgba(60,191,180,0.08)";
    for (var x = 40; x < w; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }

    drawTrace(glucose, "#3cbfb4", t, w, h, h * 0.38);
    drawTrace(oxygen, "#7eb6e4", t, w, h, h * 0.62);
    drawTrace(temp, "#e2b15a", t, w, h, h * 0.8);

    if (clock) {
      var m = Math.floor(t / 60);
      var s = t % 60;
      clock.textContent = String(m).padStart(2, "0") + ":" + s.toFixed(1).padStart(4, "0");
    }

    if (!reduce) raf = requestAnimationFrame(frame);
  }

  resize();
  frame(performance.now());
  window.addEventListener("resize", function () {
    resize();
    if (reduce) frame(performance.now());
  });
  if (reduce) cancelAnimationFrame(raf);
})();
