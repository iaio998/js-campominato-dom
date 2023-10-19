myCampoMinato();

function myCampoMinato() {
  const btn = document.querySelector("button");
  btn.addEventListener("click", myFunctionPlayground);

  //GIOCA CAMPO MINATO SU CLICK
  function myFunctionPlayground() {
    const totSquare = parseInt(document.querySelector("select").value);
    const bigBox = document.getElementById("playground");
    bigBox.innerHTML = "";

    myBombGenerator(totSquare);

    for (let i = 0; i < totSquare; i++) {
      let boxes = myDrawSquare(i, totSquare);
      bigBox.append(boxes);
    }
  }

  //DISEGNA QUADRATO
  function myDrawSquare(index, totSquare) {
    const squareWidth = Math.sqrt(totSquare);
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `calc(100% / ${squareWidth})`;
    square.style.height = square.style.width;
    square.innerHTML = index + 1;
    square.addEventListener("click", function () {
      square.classList.add("active");
      console.log(this.innerHTML);
    });
    return square;
  }

  //CREAZIONE BOMBE
  function myBombGenerator(totSquare) {
    const NUM_BOMBS = 16;
    const bombs = [];
    while (bombs.length < NUM_BOMBS) {
      let bomb = getRndInteger(1, totSquare);
      if (!bombs.includes(bomb)) {
        bombs.push(bomb);
      }
    }
    console.log(bombs);
  }

  //ESPLOSIONE BOMBA
}
