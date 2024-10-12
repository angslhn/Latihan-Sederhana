const counterNumber = document.getElementById("counterNumber");
const menambahNumber = document.getElementById("menambahNumber");
const mengaturUlang = document.getElementById("mengaturUlang");
const mengurangiNumber = document.getElementById("mengurangiNumber");

let counter = 0;

menambahNumber.addEventListener("click", (event) => {
  event.preventDefault();

  counter++;
  counterNumber.textContent = counter;
});

mengurangiNumber.addEventListener("click", (event) => {
  event.preventDefault();

  if (counter != 0) {
    counter--;
  } else {
    counter = 0;
    alert("Counter sudah menunjukan angka 0!");
  }

  counterNumber.textContent = counter;
});

mengaturUlang.addEventListener("click", (event) => {
  event.preventDefault();

  counter = 0;
  counterNumber.textContent = counter;
});
