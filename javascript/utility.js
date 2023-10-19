// UTILITY
/**
 *Genera un numero intero ranodmico
 * @param {Number} min primo numero range
 * @param {Number} max secondo numero range
 * @returns {Number} totale rabdom numeri range
 */
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Determina se il numero e' pari
 * @param {Number} num
 * @returns {Boolean}
 */
function isEven(num) {
  //   if (num % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return num % 2 === 0 ? true : false;
}

function printResult(alertColor, message) {
  resultEl.classList.add(alertColor);
  resultEl.classList.remove("d-none");
  resultEl.innerHTML = message;
}

function reset() {
  resultEl.classList.remove("alert-danger");
  resultEl.classList.add("d-none");
}
