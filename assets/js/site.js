// Scrollytelling for the surface stories.
// Discrete activation: one IntersectionObserver per story marks the step crossing
// the activation line and shows its panel on the sticky stage. No scroll listeners.
// Below the two-column breakpoint each panel moves inline under its own step.
(function () {
  document.documentElement.classList.add("js");
  var wide = window.matchMedia("(min-width: 960px) and (min-height: 620px)");

  document.querySelectorAll("[data-story]").forEach(function (story) {
    var steps = Array.prototype.slice.call(story.querySelectorAll(".step"));
    var frame = story.querySelector(".stage-frame");
    var panels = {};
    story.querySelectorAll("[data-panel]").forEach(function (p) {
      p.setAttribute("aria-hidden", "true");
      panels[p.dataset.panel] = p;
    });

    function place() {
      steps.forEach(function (step) {
        var panel = panels[step.dataset.step];
        if (!panel) return;
        if (wide.matches) frame.appendChild(panel);
        else step.insertBefore(panel, step.querySelector(".go"));
      });
    }
    place();
    wide.addEventListener("change", place);

    if (!("IntersectionObserver" in window)) return;
    var current = null;
    function activate(step) {
      if (step === current) return;
      if (current) {
        current.classList.remove("is-active");
        current.removeAttribute("aria-current");
        var old = panels[current.dataset.step];
        if (old) old.classList.remove("is-active");
      }
      current = step;
      step.classList.add("is-active");
      step.setAttribute("aria-current", "step");
      var next = panels[step.dataset.step];
      if (next) next.classList.add("is-active");
    }

    // The activation line sits at 45% of the viewport height.
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) activate(e.target); });
    }, { rootMargin: "-45% 0px -55% 0px", threshold: 0 });
    steps.forEach(function (s) { io.observe(s); });
    if (steps[0]) activate(steps[0]);
  });
})();
