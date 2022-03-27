/* this module will handle the consequential behavior of the day and night switch [ css color variables changes 
(switch between day and night theme), collection of the step1's answer and relative evaluation ] */

const themeSwitch = document.getElementById("dn");

const lightGif = "https://media.giphy.com/media/5GngQyb99J3Og/giphy.gif";
const darkGif = "https://media.giphy.com/media/11kn6DFp9BNqWA/giphy.gif";

const root = document.documentElement;

let chosenTheme;

function themeHandlerStep1() {
  function themeValueSetter() {
    if (themeSwitch.checked) {
      localStorage.setItem("THEME", "dark");
      chosenTheme = "dark";
    } else if (!themeSwitch.checked) {
      localStorage.setItem("THEME", "light");
      chosenTheme = "light";
    }
  }

  function themeSelectionHandler() {
    if (chosenTheme === "dark") {
      root.style.setProperty("--primary-color", "#282828");
      root.style.setProperty("--secondary-color", "#EDF5E1");

      document.getElementById(
        "step1-body"
      ).style.backgroundImage = `url(${lightGif})`;
    } else if (chosenTheme === "light") {
      root.style.setProperty("--primary-color", "#EDF5E1");
      root.style.setProperty("--secondary-color", "#282828");

      document.getElementById(
        "step1-body"
      ).style.backgroundImage = `url(${darkGif})`;
    }
  }

  themeValueSetter();
  themeSelectionHandler();
}

// while the previous function affected primarly the step1 page theme, the following will affect the remaning pages

const lightGifsArr = [
  "https://media.giphy.com/media/KwZoSJlvep6Vy/giphy.gif", // clouds
  "https://media.giphy.com/media/3o6gbc8bxPTKRviAnu/giphy.gif", // water seen from below
  "https://media.giphy.com/media/by7uJ8IGaeDmw/giphy.gif", // dolphins
  "https://media.giphy.com/media/KHhDYimb50L6jLPSh4/giphy.gif", // sunset over the mountains
];

const darkGifsArr = [
  "https://media.giphy.com/media/xWC0BCZtkDxE869erD/giphy.gif", // half wea half sky on sunset
  "https://media.giphy.com/media/Q5idwzxmoRkBdiEVpu/giphy.gif", // wavey ocean
  "https://media.giphy.com/media/jxsR1JhrmmeUE/giphy.gif", // sunset alternating
  "https://media.giphy.com/media/wK2MKn5jjcvUIe2ux1/giphy.gif", // sunset timelapse
];

chosenTheme = localStorage.getItem("THEME");

function themeSetter() {
  function varChanger() {
    if (chosenTheme === "dark") {
      root.style.setProperty("--primary-color", "#282828");
      root.style.setProperty("--secondary-color", "#EDF5E1");
    } else {
      root.style.setProperty("--primary-color", "#EDF5E1");
      root.style.setProperty("--secondary-color", "#282828");
    }
  }

  function backgroundSetter() {
    const randomNumber = Math.floor(Math.random() * 4);
    let chosenGif;

    if (chosenTheme == "dark") {
      chosenGif = lightGifsArr[randomNumber];
      document.body.style.backgroundImage = `url('${chosenGif}')`;
    } else {
      chosenGif = darkGifsArr[randomNumber];
      document.body.style.backgroundImage = `url('${chosenGif}')`;
    }
  }

  varChanger();
  backgroundSetter();
}

export { themeSwitch, chosenTheme, themeHandlerStep1, themeSetter };
