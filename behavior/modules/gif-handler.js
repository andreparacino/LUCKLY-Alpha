const gifs = [
  "https://media.giphy.com/media/2voehPbevp0CZgMGf5/giphy.gif",
  "https://media.giphy.com/media/1zRh19FgG1uHDO0N99/giphy.gif",
  "https://media.giphy.com/media/11kn6DFp9BNqWA/giphy.gif",
  "https://media.giphy.com/media/3o6ZtluYTKJeXXqt8s/giphy.gif",
  "https://media.giphy.com/media/fC6BAcnLFF2o/giphy.gif",
];

function setMainGif() {
  const randomNumber = Math.floor(Math.random() * 4);
  const chosenGif = gifs[randomNumber];

  document.getElementById(
    "main-page-body"
  ).style.backgroundImage = `url('${chosenGif}')`;
}

export { setMainGif };
