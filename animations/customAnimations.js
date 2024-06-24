const isMarkersOn = false;

// Two Panel, Side by Side
export function pinTwoPanel(
  targetStartTrigger,
  pinnedContent,
  targetEndTrigger,
  endString
) {
  let mm = gsap.matchMedia();
  // let desktopBreakpoint = "(min-width: 992px)";
  let desktopBreakpoint = "(min-width: 768px)";
  let mobileBreakpoint = "(max-width: 767px)";
  // let mobileLandscapeBreakpoint = "(max-width: 767px)";
  // let mobilePortraitBreakpoint = "(max-width: 478px)";

  mm.add(desktopBreakpoint, () => {
    ScrollTrigger.create({
      trigger: targetStartTrigger,
      pin: pinnedContent,
      ease: "none",
      scrub: true,
      anticipatePin: 5,
      markers: isMarkersOn,
      start: "top top",
      endTrigger: targetEndTrigger,
      end: endString,
    });
  });
}

// Horizontal Scroller
export function createHorizontalScroller(
  horizontalTrigger,
  horizontalPin,
  horizontalContent
) {
  let mm = gsap.matchMedia();
  // let desktopBreakpoint = "(min-width: 992px)";
  let desktopBreakpoint = "(min-width: 768px)";
  let mobileBreakpoint = "(max-width: 767px)";
  // let mobileLandscapeBreakpoint = "(max-width: 767px)";
  // let mobilePortraitBreakpoint = "(max-width: 478px)";

  gsap.to(horizontalTrigger, {
    x: () =>
      -(
        document.querySelector(horizontalContent).offsetWidth -
        window.innerWidth
      ),
    ease: "none",
    scrollTrigger: {
      trigger: horizontalTrigger,
      pin: horizontalPin,
      anticipatePin: true,
      scrub: true,
      markers: isMarkersOn,
      end: () => "+=" + document.querySelector(horizontalContent).offsetWidth,
    },
  });
}
