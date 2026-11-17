// The surface tour.
// The world is a photo of a laptop; its screen shows the surface map. Scrolling pushes the
// camera into the screen, then through each surface, then back out to the laptop.
// Discrete activation: one IntersectionObserver marks the shot crossing the middle of the
// viewport. The camera is a single CSS transform on .world, eased by a CSS transition.
// No scroll listeners.
// On narrow or short screens the photo is a still picture and each shot gets a copy of its
// window inline.
(function () {
  document.documentElement.classList.add("js");
  var tour = document.querySelector("[data-tour]");
  if (!tour) return;

  var wide = window.matchMedia("(min-width: 960px) and (min-height: 620px)");
  var still = window.matchMedia("(prefers-reduced-motion: reduce)");
  var stage = tour.querySelector(".stage");
  var view = tour.querySelector(".viewport");
  var world = tour.querySelector(".world");
  var screen = world.querySelector(".screen");
  var shots = Array.prototype.slice.call(tour.querySelectorAll("[data-shot]"));

  // The photo's screen, measured from its pixels (photo px): top-left, top-right, bottom-left.
  // The map is laid onto it with one affine matrix, inset half a pixel into the bezel.
  var TL = [316.5, 106.5], TR = [1350.5, 106.5], BL = [310.5, 711.5];
  var MW = screen.offsetWidth, MH = screen.offsetHeight;
  var A = {
    a: (TR[0] - TL[0]) / MW, b: (TR[1] - TL[1]) / MW,
    c: (BL[0] - TL[0]) / MH, d: (BL[1] - TL[1]) / MH,
    e: TL[0], f: TL[1]
  };
  screen.style.transform = "matrix(" + [A.a, A.b, A.c, A.d, A.e, A.f].join(",") + ")";
  function toPhoto(x, y) { return [A.a * x + A.c * y + A.e, A.b * x + A.d * y + A.f]; }

  // Camera targets, in photo px.
  var fixed = {
    laptop: { x: 130, y: 60, w: 1420, h: 820 },
    screen: { x: 310, y: 106, w: 1041, h: 606 }
  };
  var spots = {};
  screen.querySelectorAll("[data-cam]").forEach(function (el) { spots[el.dataset.cam] = el; });

  // Map-space box of an element inside the screen, projected into the photo.
  function target(name) {
    if (fixed[name]) return fixed[name];
    var el = spots[name], x = 0, y = 0, e = el;
    while (e && e !== screen) { x += e.offsetLeft; y += e.offsetTop; e = e.offsetParent; }
    var pts = [toPhoto(x, y), toPhoto(x + el.offsetWidth, y), toPhoto(x, y + el.offsetHeight), toPhoto(x + el.offsetWidth, y + el.offsetHeight)];
    var xs = pts.map(function (p) { return p[0]; }), ys = pts.map(function (p) { return p[1]; });
    var x0 = Math.min.apply(null, xs), y0 = Math.min.apply(null, ys);
    return { x: x0, y: y0, w: Math.max.apply(null, xs) - x0, h: Math.max.apply(null, ys) - y0 };
  }

  var links = {};
  tour.querySelectorAll(".stops a").forEach(function (a) { links[a.hash.slice(1)] = a; });
  var current = null;

  function aim(shot, animate) {
    if (!wide.matches) {
      var crop = fixed.laptop;
      var s0 = view.clientWidth / crop.w;
      view.style.height = Math.round(crop.h * s0) + "px";
      world.classList.remove("moving", "zoomed", "inside", "inside-full");
      stage.classList.remove("inside");
      world.style.transform = "translate(" + (-crop.x * s0).toFixed(1) + "px," + (-crop.y * s0).toFixed(1) + "px) scale(" + s0.toFixed(4) + ")";
      return;
    }
    view.style.height = "";
    var vw = view.clientWidth, vh = view.clientHeight;
    var name = shot.dataset.shot;
    var copy = shot.querySelector(".card, .intro-copy");
    var left = copy ? copy.getBoundingClientRect().right - view.getBoundingClientRect().left + (name === "laptop" ? 8 : 48) : 0;
    var right = vw - (copy ? 48 : 24);
    var pad = name === "laptop" ? 0 : vh * 0.06;
    var b = target(name);
    var close = !fixed[name] && name !== "self" && name !== "agents";
    // Close-ups are capped by how large the map itself gets (1.3x its own px).
    var cap = close ? 1.3 / Math.hypot(A.a, A.b) : Infinity;
    var s = Math.min((right - left) / b.w, (vh - pad * 2) / b.h, cap);
    var tx = (left + right) / 2 - (b.x + b.w / 2) * s;
    var ty = vh / 2 - (b.y + b.h / 2) * s;

    world.classList.toggle("moving", animate && !still.matches);
    world.classList.toggle("zoomed", close);
    world.classList.toggle("inside", name !== "laptop");
    world.classList.toggle("inside-full", name === "screen");
    stage.classList.toggle("inside", name !== "laptop");
    world.style.transform = "translate(" + tx.toFixed(1) + "px," + ty.toFixed(1) + "px) scale(" + s.toFixed(4) + ")";

    // Ground behind the stem: the map's Light half reads as light; everything else is dark.
    var px = (tour.querySelector(".stem").offsetLeft + 20 - tx) / s;
    var py = (vh / 2 - ty) / s;
    var sc = fixed.screen, ground = "ink";
    if (px > sc.x && px < sc.x + sc.w && py > sc.y && py < sc.y + sc.h && px < sc.x + sc.w / 2) ground = "light";
    stage.dataset.ground = ground;
  }

  function activate(shot) {
    if (shot === current) return;
    if (current) {
      current.classList.remove("is-active");
      var old = spots[current.dataset.shot];
      if (old && old.classList.contains("spot")) old.classList.remove("is-active");
      var oldLink = links[current.id];
      if (oldLink) oldLink.removeAttribute("aria-current");
    }
    current = shot;
    shot.classList.add("is-active");
    var spot = spots[shot.dataset.shot];
    if (spot && spot.classList.contains("spot")) spot.classList.add("is-active");
    var link = links[shot.id];
    if (link) link.setAttribute("aria-current", "step");
    aim(shot, true);
  }

  // Narrow screens: each shot carries a copy of its window under the copy.
  shots.forEach(function (shot) {
    var spot = spots[shot.dataset.shot];
    if (!spot || !spot.classList.contains("spot")) return;
    var copy = spot.querySelector(".panel").cloneNode(true);
    copy.setAttribute("aria-hidden", "true");
    var card = shot.querySelector(".card");
    card.insertBefore(copy, card.querySelector(".go"));
  });

  // Clicking a window on the screen jumps to its shot.
  world.addEventListener("click", function (e) {
    if (!wide.matches) return;
    var spot = e.target.closest(".spot");
    if (!spot) return;
    var shot = document.getElementById(spot.dataset.cam);
    if (shot) shot.scrollIntoView({ behavior: still.matches ? "auto" : "smooth", block: "start" });
  });

  function reframe() { aim(current || shots[0], false); }
  new ResizeObserver(reframe).observe(view);
  wide.addEventListener("change", reframe);
  if (document.fonts) document.fonts.ready.then(reframe);

  activate(shots[0]);
  world.classList.remove("moving");

  if (!("IntersectionObserver" in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) activate(e.target); });
  }, { rootMargin: "-50% 0px -50% 0px", threshold: 0 });
  shots.forEach(function (s) { io.observe(s); });
})();

// Compare: highlight one trait across the three captured replies.
(function () {
  var sec = document.querySelector("[data-compare]");
  if (!sec) return;
  var chips = sec.querySelectorAll(".chip"), panels = sec.querySelectorAll(".replies .panel"), marks = sec.querySelectorAll("mark");
  chips.forEach(function (c) {
    c.addEventListener("click", function () {
      var on = c.getAttribute("aria-pressed") !== "true";
      chips.forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
      c.setAttribute("aria-pressed", String(on));
      var t = on ? c.dataset.t : null;
      marks.forEach(function (m) { m.classList.toggle("on", m.dataset.t === t); });
      panels.forEach(function (p) {
        var has = !!t && p.dataset.has.split(" ").indexOf(t) >= 0;
        p.classList.toggle("hit", has);
        p.classList.toggle("dim", !!t && !has);
      });
    });
  });
})();

// Benchmark: choose what varies; that slot cycles through its options, the other locks.
(function () {
  var sec = document.querySelector("[data-bench]");
  if (!sec) return;
  var still = window.matchMedia("(prefers-reduced-motion: reduce)");
  var chips = sec.querySelectorAll(".chip"), timer = null, visible = false, active = "surface";
  function cycle() {
    clearInterval(timer);
    sec.querySelectorAll(".opts .now").forEach(function (n) { n.classList.remove("now"); });
    var items = sec.querySelectorAll('.slot[data-slot="' + active + '"] .opts > *'), i = 0;
    items[0].classList.add("now");
    // Only animate while the section is on screen.
    if (still.matches || !visible) return;
    timer = setInterval(function () { items[i].classList.remove("now"); i = (i + 1) % items.length; items[i].classList.add("now"); }, 900);
  }
  function set(v) {
    active = v;
    chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c.dataset.v === v)); });
    sec.querySelectorAll(".slot").forEach(function (s) {
      var varied = s.dataset.slot === v;
      s.classList.toggle("varied", varied);
      s.classList.toggle("held", !varied);
      s.querySelector(".state").textContent = "3 · " + (varied ? "Varied" : "Held fixed");
    });
    cycle();
  }
  chips.forEach(function (c) { c.addEventListener("click", function () { set(c.dataset.v); }); });
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (es) { visible = es[0].isIntersecting; cycle(); }).observe(sec.querySelector(".flow"));
  }
  set("surface");
})();

// Ferret: each step reveals the exchange up to its turn. Discrete activation, one observer.
(function () {
  var sec = document.querySelector("[data-ferret]");
  if (!sec || !("IntersectionObserver" in window)) return;
  var steps = sec.querySelectorAll(".f-step"), turns = sec.querySelectorAll(".ex-turns li"), meter = sec.querySelector(".meter");
  var label = { none: "not shown yet", probing: "probing", shown: "shown" };
  // Narrow screens show the whole exchange at once, so the marker shows the end state.
  var wide = window.matchMedia("(min-width: 960px) and (min-height: 620px)");
  function show(step) {
    if (!wide.matches) step = steps[steps.length - 1];
    steps.forEach(function (s) { s.classList.toggle("is-active", s === step); });
    var n = +step.dataset.upto;
    turns.forEach(function (t, i) { t.classList.toggle("later", i >= n); });
    meter.dataset.s = step.dataset.s;
    meter.querySelector(".state").textContent = label[step.dataset.s];
  }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) show(e.target); });
  }, { rootMargin: "-50% 0px -50% 0px" });
  steps.forEach(function (s) { io.observe(s); });
  show(steps[0]);
})();

// Chooser: three answers re-rank the eight surfaces, with reasons from the docs.
(function () {
  var sec = document.querySelector("[data-chooser]");
  if (!sec) return;
  var still = window.matchMedia("(prefers-reduced-motion: reduce)");
  var facts = {
    cli: { self: 1 }, slack: { self: 1 }, discord: { self: 1 }, jupyter: { self: 1, soon: 1 },
    grok: { paid: 1 }, muse: { free: 1 }, dots: { soon: 1 }, duet: { soon: 1 }
  };
  var ans = { where: "none", always: "no", pay: "yes" };
  var list = sec.querySelector(".ch-list");
  var rows = Array.prototype.slice.call(list.children);
  rows.forEach(function (r) { var w = document.createElement("p"); w.className = "why"; r.querySelector("div").appendChild(w); });

  function score(id) {
    var f = facts[id], why = [], n = 0;
    function add(v, t) { n += v; why.push([v, t]); }
    if (ans.where === "slack" && id === "slack") add(3, "Lives where your class already talks");
    if (ans.where === "discord" && id === "discord") add(3, "Lives in your course server");
    if (ans.where === "notebooks" && id === "jupyter") add(3, "Runs in the notebook students are stuck in");
    if (ans.where === "none" && id === "cli") add(2, "Quickest to try, no chat platform needed");
    if (ans.always === "yes") { if (f.self) add(-1, "Runs on your own setup"); else add(2, "Keeps the course on its own cloud computer"); }
    else if (f.self) add(1, "You control the setup and the model");
    if (f.paid) add(ans.pay === "no" ? -3 : 0, "Needs an eligible paid Grok Bot plan");
    if (f.free) add(ans.pay === "no" ? 2 : 0, "Free with a usage limit, rolling out in the US");
    if (f.soon) add(-1, "Setup guide not in the docs yet");
    return { n: n, why: why };
  }

  function render() {
    var before = {};
    rows.forEach(function (r) { before[r.dataset.id] = r.getBoundingClientRect().top; });
    var ranked = rows.map(function (r, i) { var s = score(r.dataset.id); return { r: r, n: s.n, why: s.why, i: i }; })
      .sort(function (a, b) { return b.n - a.n || a.i - b.i; });
    ranked.forEach(function (x, i) {
      x.r.classList.toggle("top", i === 0);
      x.r.classList.toggle("low", x.n < 0);
      x.r.querySelector(".why").innerHTML = x.why.map(function (w) {
        return '<span class="' + (w[0] > 0 ? "plus" : w[0] < 0 ? "minus" : "") + '">' + w[1] + "</span>";
      }).join("");
      list.appendChild(x.r);
    });
    if (still.matches) return;
    // FLIP: slide each row from where it was to where it is now.
    rows.forEach(function (r) {
      var d = before[r.dataset.id] - r.getBoundingClientRect().top;
      if (!d) return;
      r.style.transition = "none";
      r.style.transform = "translateY(" + d + "px)";
      requestAnimationFrame(function () { requestAnimationFrame(function () { r.style.transition = ""; r.style.transform = ""; }); });
    });
  }

  sec.querySelectorAll("[data-q]").forEach(function (g) {
    g.addEventListener("click", function (e) {
      var b = e.target.closest(".chip");
      if (!b) return;
      g.querySelectorAll(".chip").forEach(function (c) { c.setAttribute("aria-pressed", String(c === b)); });
      ans[g.dataset.q] = b.dataset.a;
      render();
    });
  });
  render();
})();
