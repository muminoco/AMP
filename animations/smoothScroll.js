export function smoothScroll() {
  const images = $(".parallax-image");
  const imageWrappers = $(".image_component");

  let smoother = ScrollSmoother.create({
    wrapper: ".page-wrapper",
    content: ".main-wrapper",
    smooth: 1,
    // normalizeScroll: true,
    effects: true,
  });

  smoother.effects(images, { speed: "auto" });
}
