myCampoMinato();

function myCampoMinato() {
  const NUM_BOMBS = 16;
  let endGame;
  const btn = document.querySelector("button");
  btn.addEventListener("click", myFunctionPlayground);

  //GIOCA CAMPO MINATO
  function myFunctionPlayground() {
    endGame = false;
    const totSquare = parseInt(document.querySelector("select").value);
    const bigBox = document.getElementById("playground");
    bigBox.innerHTML = "";

    let bomb = myBombGenerator(totSquare);

    for (let i = 0; i < totSquare; i++) {
      let boxes = myDrawSquare(i, totSquare, bomb);
      bigBox.append(boxes);
    }
  }

  //DISEGNA QUADRATO
  function myDrawSquare(index, totSquare, bomb) {
    const squareWidth = Math.sqrt(totSquare);
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `calc(100% / ${squareWidth})`;
    square.style.height = square.style.width;
    square.innerHTML = index + 1;
    square.addEventListener("click", function colorSquare() {
      let newVar = index + 1;
      if (!endGame) {
        if (bomb.includes(newVar)) {
          square.classList.add("bomb");
          endGame = true;
          console.log(this.innerHTML);
        } else {
          square.classList.add("active");

          console.log(this.innerHTML);
        }
      } else {
        square.removeEventListener("click", colorSquare);
      }
    });
    return square;
  }

  //CREAZIONE BOMBE
  function myBombGenerator(totSquare) {
    const bombArray = [];
    while (bombArray.length < NUM_BOMBS) {
      let bomb = getRndInteger(1, totSquare);
      if (!bombArray.includes(bomb)) {
        bombArray.push(bomb);
      }
    }
    console.log(bombArray);
    return bombArray;
  }

  //ESPLOSIONE BOMBA
  // function myBombActivation() {
  //   if (square === bombs[i]) {
  //     square.classList.add("bomb");
  //   }
  // }
}
