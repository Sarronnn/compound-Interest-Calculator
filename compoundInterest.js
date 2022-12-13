const principalBox = document.querySelector("#pAmount");
const interestBox = document.querySelector("#interest");
const timeBox = document.querySelector("#years");
const compoundBox = document.querySelector("#compounded");
const amountSpan = document.querySelector("#amount");
const totalSpan = document.querySelector("#total");

principalBox.addEventListener("input", computeCI);
interestBox.addEventListener("input", computeCI);
timeBox.addEventListener("input", computeCI);
compoundBox.addEventListener("input", computeCI);
amountSpan.addEventListener("click", fadeOut);
totalSpan.addEventListener("click", fadeOut);

function computeCI() {
  const principal = Number(principalBox.value);
  const interest = Number(interestBox.value);
  const time = Number(timeBox.value);
  const compound = Number(compoundBox.value);
  const total =
    principal * (1 + interest / (100 * compound)) ** (time * compound);
  const moneyEarned = total - principal;
  totalSpan.textContent = total;
  amountSpan.textContent = moneyEarned;
}
function fadeOut() {
  document.body.style.opacity = 0; /*opacity was first set to 0 */
  document.body.style.transition = "ALL 5s"; /* gradually change opacity*/
  document.body.style.marginTop = "200px";
  document.body.style.transform = "rotate(90deg)";
}
