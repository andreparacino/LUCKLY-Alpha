function canvasCreator() {
  // stored variables handling

  const storedVariables = {
    theme: localStorage.getItem("THEME"),
    luckyNum: parseInt(localStorage.getItem("LUCKY-NUM")),
    luckyWord: localStorage.getItem("LUCKY-WORD"),
    fName: localStorage.getItem("FIRST-NAME"),
  };

  // background layers structuring

  function reverseString(str) {
    const splitString = str.split("");
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;
  }

  const encryptedLuckyWord = CryptoJS.AES.encrypt(
    storedVariables.luckyWord,
    "LUCKLYLUCKLYLUCK"
  ).toString();

  const encryptedLuckyWordRev = reverseString(encryptedLuckyWord);

  const pTag1 = document.createElement("p");

  const pTag2 = document.createElement("p");

  const pTag3 = document.createElement("p");

  const pText = document.createTextNode(
    `${encryptedLuckyWord}
        ##${encryptedLuckyWordRev}
        ${encryptedLuckyWord}
        ##${encryptedLuckyWordRev}
        ${encryptedLuckyWord}
        ##${encryptedLuckyWordRev}
        ${encryptedLuckyWord}
        ##${encryptedLuckyWordRev}
        ${encryptedLuckyWord}
        ##${encryptedLuckyWordRev}
        ${encryptedLuckyWord}
        ##${encryptedLuckyWordRev}
        ${encryptedLuckyWord}
        ##${encryptedLuckyWordRev}
        ${encryptedLuckyWord}`
  );

  pTag1.innerHTML = pText.nodeValue;
  pTag2.innerHTML = pText.nodeValue;
  pTag3.innerHTML = pText.nodeValue;

  pTag3.classList.add("layer");

  const sectionTag = document.getElementById("canvas");

  sectionTag.appendChild(pTag1);
  sectionTag.appendChild(pTag2);
  sectionTag.appendChild(pTag3);

  // background layers color gradient selection

  if (storedVariables.theme === "dark") {
    pTag1.id = "layer1-dark";
    pTag2.id = "layer2-dark";
    pTag3.id = "layer3-dark";
  } else if (storedVariables.theme === "light") {
    pTag1.id = "layer1-light";
    pTag2.id = "layer2-light";
    pTag3.id = "layer3-light";
  }

  // putting the correct amount of letters on the canvas, at random positions with random opacity and rotation

  const firstLetterUpper = storedVariables.fName.charAt(0).toUpperCase();
  const wrapperTag = document.getElementById("letter-wrapper");

  for (let i = 0; i < storedVariables.luckyNum; i++) {
    const spanTag = document.createElement("span");

    spanTag.innerHTML = `${firstLetterUpper}`;
    spanTag.classList.add("f-letter");

    wrapperTag.appendChild(spanTag);

    if (i % 2 == 0) {
      const bottomRandom = Math.floor(Math.random() * 14);
      spanTag.style.bottom = `${bottomRandom}rem`;
    } else {
      const topRandom = Math.floor(Math.random() * 14);
      spanTag.style.top = `${topRandom}rem`;
    }

    const randomDeg = Math.floor(Math.random() * 361);
    const randomOpac = Math.random() + 0.3;

    spanTag.style.opacity = `${randomOpac}`;

    spanTag.style.transform = `rotate(${randomDeg}deg)`;
  }

  // html2canvas(document.getElementById('to-capture')).then(function(canvas) {

  //     let base64image= canvas.toDataURL('image/png')
  //     window.open(base64image, '_blank')

  // })
}

export { canvasCreator };
