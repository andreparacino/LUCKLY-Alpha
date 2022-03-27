function luckyWordCollector() {
  window.addEventListener("load", () => {
    localStorage.removeItem("LUCKY-WORD");
    localStorage.removeItem("FIRST-NAME");
  });

  function luckyWordGetSet() {
    const luckyWord = document.getElementById("word-input");

    if (luckyWord.value.indexOf(" ") >= 0) {
      document.getElementById("lucky-word-form").action = "step3.html";
      alert(`You have to provide only one word, it also can't contain spaces.`);
    }

    localStorage.setItem("LUCKY-WORD", luckyWord.value);
  }

  // binding the return/enter key to the next-step button

  document.querySelector("#word-input").addEventListener("keyup", (event) => {
    if (event.key !== "Enter") return;

    document.querySelector("#next-step-btn").click();
    event.preventDefault();
  });

  document
    .getElementById("next-step-btn")
    .addEventListener("click", luckyWordGetSet);
}

export { luckyWordCollector };
