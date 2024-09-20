const resetButton = document.getElementById("resetButton");
const bulb = document.getElementById("lightbulb");
const numberdisplay = document.getElementById("numberDisplay");
const counterButton = document.getElementById("counterButton");

bulb.addEventListener("click", function () {
  if (numberDisplay.style.color === "yellow") {
    numberDisplay.style.color = ""; // Resets to default color
  } else {
    numberDisplay.style.color = "yellow";
  }
});

counterButton.addEventListener("click", function () {
  if (numberdisplay.textContent == "33") {
    numberdisplay.textContent = "0";
  } else {
    numberdisplay.textContent = parseInt(numberdisplay.textContent) + 1;
  }
});

resetButton.addEventListener("click", function () {
  numberdisplay.textContent = 0;
});
