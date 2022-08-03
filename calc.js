const multiply = document.querySelector(`.multiply`);
const divide = document.querySelector(`.divide`);
const ans = document.querySelector(`.ans`);

multiply.addEventListener(`click`, multiplier);
divide.addEventListener(`click`, divider);

function multiplier() {
  const num1 = parseInt(document.querySelector(`.num1`).value);
  const num2 = parseInt(document.querySelector(`.num2`).value);

  if (num1 && num2 && typeof (num1 && num2) === `number`) {
    ans.textContent = `Your answer is ${num1 * num2}`;
  } else {
    ans.textContent = `wrong input!`;
  }
}
function divider() {
  const num1 = parseInt(document.querySelector(`.num1`).value);
  const num2 = parseInt(document.querySelector(`.num2`).value);

  if (num1 && num2 && typeof (num1 && num2) === `number`) {
    ans.textContent = `Your answer is ${(num1 / num2).toFixed(2)}`;
  } else {
    ans.textContent = `wrong input!`;
  }
}
