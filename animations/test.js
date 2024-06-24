//SplideJS Home Hero Slider
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide.is-explore-card", {
    type: "loop",
    drag: true,
    snap: true,
    start: "center",
    direction: "ltr",
    focus: "center",
    keyboard: true,
    isNavigation: true,
    autoWidth: true,
    autoplay: false,
    autoStart: false,
    rewind: true,
    interval: 10000,
    updateOnMove: true,
    pauseOnFocus: true,
    pagination: false,
    arrows: true,
    breakpoints: {
      // Mobile Landscape Breakpoint
      767: {
        direction: "ltr",
        /* autoScroll: { autoStart: true, speed: 0.9 }, */
      },
    },
  }).mount(window.splide.Extensions);
});

//SplideJS Home Hero Slider
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide.is-home-hero", {
    type: "loop",
    drag: "free",
    direction: "rtl",
    autoScroll: {
      autoStart: true,
      speed: 0.6,
      pauseOnHover: true,
      pauseOnFocus: false,
    },
    interval: 0,
    pauseOnFocus: false,
    pagination: false,
    autoWidth: true,
    arrows: false,
    breakpoints: {
      // Mobile Landscape Breakpoint
      767: {
        direction: "ltr",
        autoScroll: { autoStart: true, speed: 0.9 },
      },
    },
  }).mount(window.splide.Extensions);
});
