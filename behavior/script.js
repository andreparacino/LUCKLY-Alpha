import {
  setMainGif,
  themeSwitch,
  themeHandlerStep1,
  themeSetter,
  luckyNumCollector,
  luckyWordCollector,
  fNameCollector,
  canvasCreator,
} from "./modules/utils.js";

/* these variables and acceptedPagesArr will handle the correct identification of the current page, 
this will provide the correct section of code to apply to each page */

const path = window.location.pathname;
const currentPage = path.split("/").pop();

// that's an array of all pages that must be themed

const acceptedPagesArr = [
  "step2.html",
  "step3.html",
  "step3.html?",
  "step4.html",
  "final.html",
];
if (acceptedPagesArr.includes(currentPage)) {
  window.addEventListener("load", themeSetter);
}

switch (currentPage) {
  case "index.html":
    // gif-handler behavior section
    localStorage.clear();

    window.addEventListener("load", setMainGif);

  case "step1.html":
    // theme handler section
    localStorage.clear();

    window.addEventListener("load", themeHandlerStep1);

    themeSwitch.addEventListener("change", themeHandlerStep1);

  case "step2.html":
    // step2 answer collector
    luckyNumCollector();

  case "step3.html":
    //  step3 answer collector
    luckyWordCollector();

  case "step4.html":
    // step4 answer collector
    fNameCollector();

  case "final.html":
    // canvas creation process
    canvasCreator();
}
