import {

    setMainGif, 

    themeSwitch, 
    themeHandlerStep1, 
    themeSetter, 

    luckyNumCollector,
    luckyWordCollector,
    fNameCollector,

    canvasCreator

} from "./modules/utils.js";

/* these variables and acceptedPagesArr will handle the correct identification of the current page, 
this will provide the correct section of code to apply to each page */

let path = window.location.pathname;

let currentPage = path.split("/").pop();

// that's an array of all pages that must be themed 

let acceptedPagesArr = [
    'step2.html',
    'step3.html',
    'step3.html?',
    'step4.html',
    'final.html'
]

// gif-handler behavior section

if (currentPage === 'index.html') {

    localStorage.clear()

    window.addEventListener('load', setMainGif)

}

// theme handler section

if (currentPage === 'step1.html') {

    localStorage.clear()

    window.addEventListener('load', themeHandlerStep1)

    themeSwitch.addEventListener('change', themeHandlerStep1)

}

if (acceptedPagesArr.includes(currentPage)) {

    window.addEventListener('load', themeSetter)

}

// step2 answer collector

if (currentPage === 'step2.html') {

    luckyNumCollector()

}

//  step3 answer collector

if (currentPage === 'step3.html') {
    
    luckyWordCollector()

}

// step4 answer collector 

if (currentPage === 'step4.html') {

    fNameCollector()

}

// canvas creation process

if (currentPage === 'final.html') {

    canvasCreator()

}