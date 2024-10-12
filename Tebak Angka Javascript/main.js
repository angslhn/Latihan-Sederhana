const inputNumber = document.getElementById("number");
const submitNumber = document.getElementById("submit");
const textMinNumber = document.getElementById("minNumber");
const textMaxNumber = document.getElementById("maxNumber");

let minNumber = 1;
let maxNumber = 10;
let numberResult = Math.floor(Math.random() * (maxNumber - minNumber + 1));

textMinNumber.textContent = minNumber;
textMaxNumber.textContent = maxNumber;

let tryNumber = 0;
let tryAttempts = 3;

submitNumber.addEventListener("click", () => {
  let number = Number(inputNumber.value);
  tryNumber++;

  if (number == numberResult) {
    alert("Congratulations you got $1000 dollars.");
    location.reload();
  } else if (number < minNumber || number > maxNumber) {
    alert(`Number does not match the distance between ${minNumber} and ${maxNumber} so it is invalid`);
  } else if (number != numberResult && tryNumber < tryAttempts) {
    alert(`Try again you still have ${tryAttempts - tryNumber} chances to try it out`);
  } else if (tryNumber >= tryAttempts) {
    alert(`You have tried up to ${tryAttempts} times`);
    if (confirm("Do you want to try again and quit?")) {
        location.reload();
    }
  }
});
