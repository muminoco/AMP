const isMarkersOn = false;

export function imagesScrollInAnimation(item) {
  const target = item;
  const batchInterval = 0;

  // Parameters for animation
  // tweenFrom is the animation starting point
  // tweenTo is animation ending point + the animation itself
  const tweenFrom = {
    opacity: 0,
    overwrite: true,
  };

  const tweenTo = {
    opacity: 1,
    stagger: { amount: 0.75, from: "random" },
    scale: 1,
    duration: 0.75,
    overwrite: true,
    ease: "sine.inOut",
  };

  // Parameters for animation when it leaves the screen
  const tweenExit = tweenFrom;

  // Sets the inital state of the animation
  gsap.set(target, { opacity: 0 });

  // ScrollTrigger batch function
  ScrollTrigger.batch(target, {
    interval: batchInterval,
    start: "top bottom",
    end: "bottom top",
    markers: isMarkersOn,
    onEnter: (batch) => gsap.fromTo(batch, tweenFrom, tweenTo),
    once: true,
    // onLeave: (batch) => gsap.set(batch, tweenExit),
    // onEnterBack: (batch) => gsap.fromTo(batch, tweenFrom, tweenTo),
    // onLeaveBack: (batch) => gsap.set(batch, tweenExit),
  });
}

export function timelineScrollInAnimation(item) {
  const target = item;
  const batchInterval = 0.1;

  // Parameters for animation
  // tweenFrom is the animation starting point
  // tweenTo is animation ending point + the animation itself
  const tweenFrom = {
    opacity: 0,
    overwrite: true,
  };

  const tweenTo = {
    opacity: 1,
    stagger: { amount: 1, from: "left" },
    scale: 1,
    duration: 1,
    overwrite: true,
    ease: "sine.inOut",
  };

  // Parameters for animation when it leaves the screen
  const tweenExit = tweenFrom;

  // Sets the inital state of the animation
  gsap.set(target, { opacity: 0 });

  // ScrollTrigger batch function
  ScrollTrigger.batch(target, {
    interval: batchInterval,
    start: "top bottom",
    end: "bottom top",
    markers: isMarkersOn,
    onEnter: (batch) => gsap.fromTo(batch, tweenFrom, tweenTo),
    once: true,
    // onLeave: (batch) => gsap.set(batch, tweenExit),
    // onEnterBack: (batch) => gsap.fromTo(batch, tweenFrom, tweenTo),
    // onLeaveBack: (batch) => gsap.set(batch, tweenExit),
  });
}

export function quickStagger(item) {
  const target = item;
  const batchInterval = 0.1;

  // Parameters for animation
  // tweenFrom is the animation starting point
  // tweenTo is animation ending point + the animation itself
  const tweenFrom = {
    opacity: 0,
    overwrite: true,
  };

  const tweenTo = {
    opacity: 1,
    stagger: { each: 0.15, from: "left" },
    duration: 0.75,
    overwrite: true,
    ease: "sine.inOut",
  };

  // Parameters for animation when it leaves the screen
  const tweenExit = tweenFrom;

  // Sets the inital state of the animation
  gsap.set(target, { opacity: 0 });

  // ScrollTrigger batch function
  ScrollTrigger.batch(target, {
    interval: batchInterval,
    start: "top bottom",
    end: "bottom top",
    markers: isMarkersOn,
    onEnter: (batch) => gsap.fromTo(batch, tweenFrom, tweenTo),
    once: true,
    // onLeave: (batch) => gsap.set(batch, tweenExit),
    // onEnterBack: (batch) => gsap.fromTo(batch, tweenFrom, tweenTo),
    // onLeaveBack: (batch) => gsap.set(batch, tweenExit),
  });
}

export function staggerSlideUpAnimation(item) {
  const target = item;
  const batchInterval = 0.1;

  // Parameters for animation
  // tweenFrom is the animation starting point
  // tweenTo is animation ending point + the animation itself
  const tweenFrom = {
    autoAlpha: 0,
    yPercent: 15,
    overwrite: true,
  };

  const tweenTo = {
    autoAlpha: 1,
    stagger: 0.15,
    yPercent: 0,
    duration: 0.75,
    overwrite: true,
  };

  // Parameters for animation when it leaves the screen
  const tweenExit = tweenFrom;

  // Sets the inital state of the animation
  gsap.set(target, { autoAlpha: 0 });

  // ScrollTrigger batch function
  ScrollTrigger.batch(target, {
    interval: batchInterval,
    start: "top bottom",
    end: "bottom top",
    markers: isMarkersOn,
    onEnter: (batch) => gsap.fromTo(batch, tweenFrom, tweenTo),
    onLeave: (batch) => gsap.set(batch, tweenExit),
    onEnterBack: (batch) => gsap.fromTo(batch, tweenFrom, tweenTo),
    onLeaveBack: (batch) => gsap.set(batch, tweenExit),
  });
}

export function staggerBlurInAnimation(item) {
  const target = item;
  const batchInterval = 0;

  // Parameters for animation
  // tweenFrom is the animation starting point
  // tweenTo is animation ending point + the animation itself
  const tweenFrom = {
    opacity: 0,
    filter: "blur(8px)",
    scale: 0.8,
    overwrite: true,
  };

  const tweenTo = {
    opacity: 1,
    filter: "blur(0px)",
    stagger: { amount: 0.75, from: "random" },
    scale: 1,
    duration: 0.75,
    overwrite: true,
    ease: "sine.inOut",
  };

  // Parameters for animation when it leaves the screen
  const tweenExit = tweenFrom;

  // Sets the inital state of the animation
  gsap.set(target, { opacity: 0 });

  // ScrollTrigger batch function
  ScrollTrigger.batch(target, {
    interval: batchInterval,
    start: "top bottom",
    end: "bottom top",
    markers: isMarkersOn,
    onEnter: (batch) => gsap.fromTo(batch, tweenFrom, tweenTo),
    onLeave: (batch) => gsap.set(batch, tweenExit),
    onEnterBack: (batch) => gsap.fromTo(batch, tweenFrom, tweenTo),
    onLeaveBack: (batch) => gsap.set(batch, tweenExit),
  });
}
