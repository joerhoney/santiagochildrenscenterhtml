const addFuncSlides = (instance) => {
  const slides = instance.querySelectorAll(`.slide`);
  const optionsInput = instance.dataset.options
    ? instance.dataset.options.replace(/\s/g, "")
    : "";
  const options = optionsInput.toLowerCase().split(",");
  const auto = options.includes("auto");
  const hoverPause = options.includes("hoverpause");
  const tabs = options.includes("tabs");
  const prevNext = options.includes("prevnext");
  const pause = options.includes("pause");
  const stops = options.includes("stops");
  const fullScreen = options.includes("fullscreen");
  const swipe = options.includes("swipe");
  const speedInput = Number(instance.dataset.speed);
  const speed = isNaN(speedInput)
    ? 7000
    : // auto detect seconds or milliseconds.
    speedInput < 1000
    ? speedInput * 1000
    : speedInput;
  let counter = 0;
  let stopCycle = 0;
  let hovered = 0;
  // let currentSlide = 0;
  const addPrevNext = (el) => {
    // build and inject prev/next controls
    const divPrevNext = document.createElement("div"),
      spanPrev = document.createElement("span"),
      spanNext = document.createElement("span");
    divPrevNext.classList.add("prev-next-control");
    spanPrev.classList.add("prev");
    spanNext.classList.add("next");
    spanPrev.setAttribute("aria-label", "Previous");
    spanNext.setAttribute("aria-label", "Next");
    divPrevNext.appendChild(spanPrev);
    divPrevNext.appendChild(spanNext);
    // append elements to fragment, then append fragment to DOM
    el.appendChild(divPrevNext);
  };
  // const addItemKeys = (el) => {
  //   let count = 0;
  //   instance.forEach((item) => {item.dataset.key = ++count})
  // }
  // addItemKeys(slides);
  if (prevNext && slides.length > 1) {
    addPrevNext(instance);
  }
  if (auto && slides.length > 1) {
    autoCycle(el, speed, hoverPause);
  }
  const autoCycle = setInterval(() => {
    if (stopCycle != 1 && hovered != 1) {
      turnSlide(1); // increment & show
    }
  }, speed);
  const turnSlide = (i, turned = false) => {
    // 1 = increment
    // -1 = decrement
    if (i > 0) {
      counter = counter + 1 === slides.length ? 0 : counter + 1;
    } else {
      counter = counter - 1 < 0 ? slides.length - 1 : counter - 1;
    }
    slides.forEach((slide) => {
      slide.classList.remove("current");
    });
    slides[counter].classList.add("current");
    // if (tabs) {
    //   [].forEach.call(tabLi, function (el) {
    //     instance.classList.remove("current");
    //   });
    //   tabLi[counter].classList.add("current");
    // }
    if (counter === 0) {
      instance.classList.add("begin");
      instance.classList.remove("end");
    } else if (counter === slides.length - 1) {
      instance.classList.remove("begin");
      instance.classList.add("end");
    } else {
      instance.classList.remove("begin");
      instance.classList.remove("end");
    }
    // Skip one slide turn if user recently turned the slide manually.
    if (turned) {
      if (stops) {
        stopCycle = 1;
        instance.classList.add("stopped");
      } else {
        stopCycle = 1;
        setTimeout(() => {
          stopCycle = 0;
        }, speed);
      }
    }
  };
  const addEventListeners = () => {
    if (prevNext) {
      instance.querySelector(".next").addEventListener(
        "click",
        () => {
          turnSlide(1, true);
        },
        false
      );
      instance.querySelector(".prev").addEventListener(
        "click",
        () => {
          turnSlide(-1, true);
        },
        false
      );
    }
    if (hoverPause) {
      instance.addEventListener(
        "mouseover",
        () => {
          hovered = 1;
        },
        false
      );
      instance.addEventListener(
        "mouseout",
        () => {
          hovered = 0;
        },
        false
      );
    }
    let startX = 0,
      startY = 0,
      moveX = 0,
      moveY = 0,
      diffX = 0,
      diffY = 0,
      swiping = 0;
    if (swipe !== "none") {
      instance.addEventListener(
        "touchstart",
        (e) => {
          startX = e.changedTouches[0].pageX;
          startY = e.changedTouches[0].pageY;
        },
        false
      );
      instance.addEventListener(
        "touchmove",
        (e) => {
          moveX = e.changedTouches[0].pageX;
          moveY = e.changedTouches[0].pageY;
          diffX = moveX - startX;
          diffY = moveY - startY;
          if (swipe === "horizontal" || swipe === undefined) {
            if (diffX < -100) {
              if (swiping === 0) {
                turnSlide(1, true);
                swiping = 1;
              }
            }
            if (diffX > 100) {
              if (swiping === 0) {
                turnSlide(-1, true);
                swiping = 1;
              }
            }
          }
          if (swipe === "vertical" || swipe === undefined) {
            if (diffY < -100) {
              if (swiping === 0) {
                turnSlide(1, true);
                swiping = 1;
              }
            }
            if (diffY > 100) {
              if (swiping === 0) {
                turnSlide(-1, true);
                swiping = 1;
              }
            }
          }
        },
        false
      );
      instance.addEventListener(
        "touchend",
        function (e) {
          swiping = 0;
        },
        false
      );
    }
  };
  addEventListeners();
  // aFSRunning[inst] = 1; // flag for setInterval, so we can ensure we only start it once.
};

const buildAddFuncSlides = () => {
  const slideshows = document.querySelectorAll(".addFuncSlides");
  slideshows.forEach((slideshow) => {
    addFuncSlides(slideshow);
  });
};
// window.addEventListener("DOMContentLoaded", function () {
//   buildAddFuncSlides();
// });
window.onload = function () {
  buildAddFuncSlides();
};
