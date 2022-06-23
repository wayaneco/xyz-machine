class LetterGenerator {
  constructor(letters, size, direction) {
    this.letters = letters;
    this.size = size;
    this.direction = direction;
  }

  generateLetters() {
    const letterSize = 20;
    const letterArr = this.letters.split("");

    const outputContainer = document.querySelector(".output-container");

    letterArr.forEach((letter) => {
      var parentElem = document.createElement("div");
      parentElem.classList.add("parent-box");
      parentElem.style.width = `${letterSize * this.size}px`;
      parentElem.style.height = `${letterSize * this.size}px`;

      switch (letter.toLowerCase()) {
        case "x":
          for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
              const boxElem = document.createElement("div");
              boxElem.classList.add("box-item");

              let yMargin = `${i * letterSize}px`;
              let xMargin = `${j * letterSize}px`;

              boxElem.style.top = yMargin;
              boxElem.style.left = xMargin;
              boxElem.innerText = "o";

              if (i == j || i + j == this.size - 1) {
                parentElem.append(boxElem);
              }
            }
          }

          outputContainer.appendChild(parentElem);
          break;
        case "y":
          for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
              const boxElem = document.createElement("div");
              boxElem.classList.add("box-item");

              const yMargin = `${i * letterSize}px`;
              const xMargin = `${j * letterSize}px`;

              boxElem.style.top = yMargin;
              boxElem.style.left = xMargin;
              boxElem.innerText = "o";

              let halfOfTheInput = Math.round(this.size / 2);

              if (Math.round(this.size / 2) > i) {
                if (i == j || i + j == this.size - 1) {
                  parentElem.appendChild(boxElem);
                }
              } else {
                boxElem.style.left = `${(halfOfTheInput - 1) * letterSize}px`;
                parentElem.appendChild(boxElem);
              }
            }
          }
          outputContainer.appendChild(parentElem);
          break;
        case "z":
          for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
              const boxElem = document.createElement("div");
              boxElem.classList.add("box-item");

              const yMargin = `${i * letterSize}px`;
              const xMargin = `${j * letterSize}px`;

              boxElem.style.top = yMargin;
              boxElem.style.left = xMargin;
              boxElem.innerText = "o";

              if (i == 0 || this.size - 1 == i) {
                parentElem.append(boxElem);
              } else {
                boxElem.style.left = `${(this.size - i - 1) * letterSize}px`;
                parentElem.append(boxElem);
              }
            }
          }
          outputContainer.appendChild(parentElem);

          break;
        default:
          return;
      }
    });
  }
}

export { LetterGenerator };
