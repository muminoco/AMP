import { smoothScroll } from "./animations/smoothScroll.js";
import {
  createHorizontalScroller,
  pinTwoPanel,
} from "./animations/customAnimations.js";
import { setupThemeToggler } from "./themes/themeSwitcher.js";
import {
  fadeInAnimation,
  heroHeaderAnimation,
  lettersFadeInAnimation,
  linesMaskUpAnimation,
  quotesAnimation,
  sectionHeaderAnimation,
} from "./animations/textAnimations.js";
import {
  imagesScrollInAnimation,
  quickStagger,
  timelineScrollInAnimation,
} from "./animations/staggerAnimations.js";

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  /**
   * Theme Switching Functionality
   */

  function themeSwitcher() {
    // Retrives the current theme based on what's stored in localStorage.
    // If nothing's there, it defaults to "light"
    const currentTheme = localStorage.getItem("theme") || "light";
    document.getElementById(`mm-theme-switcher-${currentTheme}`).style.display =
      "flex";
    document.body.setAttribute("mm-theme", currentTheme);

    // Setup the toggle button event listener
    setupThemeToggler();
  }

  function areElementsPresent(selectors) {
    // Check if all selectors are present
    return selectors.every((selector) => {
      if ($(selector).length > 0) {
        console.log(`Element found: ${selector}`);
        return true;
      } else {
        console.log(`Element not found: ${selector}`);
        return false;
      }
    });
  }

  function textAnimations() {
    const exploreHeroHeading = $(".theme_hero-heading");
    const arabicEyebrowWrapper = $(".arabic-eyebrow_wrapper");

    // Main Text Targets
    const heroHeading = $("[ani='hero-heading']");
    const sectionHeading = $("[ani='section-heading']");
    const specialParagraph = $("[ani='special-paragraph']");
    const normalParagraph = $("[ani='paragraph']");
    // const normalParagraph = document.querySelectorAll("[ani='paragraph']");
    const highlightBlock = $(".highlight-block_text");

    heroHeaderAnimation(heroHeading);
    linesMaskUpAnimation(specialParagraph);

    fadeInAnimation(normalParagraph);

    lettersFadeInAnimation(highlightBlock);
    sectionHeaderAnimation(sectionHeading);

    // quotesAnimation($("[ani='quote']"));
  }

  function staggerAnimations() {
    const timelineItem = $(".timeline_item-component");
    const tagItem = $(".tag_item");
    const topicsItem = $(".chapter-list-item");

    imagesScrollInAnimation($(".image_component"));
    timelineScrollInAnimation(timelineItem);
    quickStagger(tagItem);
    quickStagger(topicsItem);
  }

  function runCustomAnimations() {
    // Pin Two Panel
    let twoPanelComponent = ".two-panel_component";
    let twoPanelPinned = ".two-panel_pinned";
    let twoPanelContent = ".two-panel_content";
    let twoPanelEnd = "bottom center";

    if (
      areElementsPresent([twoPanelComponent, twoPanelPinned, twoPanelContent])
    ) {
      pinTwoPanel(
        twoPanelComponent,
        twoPanelPinned,
        twoPanelContent,
        twoPanelEnd
      );
    }

    // Horizontal Scroller
    let horizontalScrollerSection = ".section_horizontal-scroller";
    let horizontalScrollerViewport = ".horizontal-scroller_viewport";
    let horizontalScrollerTrack = ".horizontal-scroller_track";

    if (
      areElementsPresent([
        horizontalScrollerSection,
        horizontalScrollerViewport,
        horizontalScrollerTrack,
      ])
    ) {
      createHorizontalScroller(
        horizontalScrollerSection,
        horizontalScrollerViewport,
        horizontalScrollerTrack
      );
    }
  }

  // Runs the smooth scrolling functionality
  smoothScroll();
  themeSwitcher();
  runCustomAnimations();
  textAnimations();
  staggerAnimations();
});
