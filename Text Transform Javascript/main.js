const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const inputText = document.getElementById("text");
const resultText = document.getElementById("transform");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const capitalizeCheckbox = document.getElementById("capitalize");
const button = document.getElementById("button");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      checkboxes.forEach((checkboxOther) => {
        if (checkboxOther != checkbox) {
          checkboxOther.checked = false;
        }
      });
    }
  });
});

function uppercase(text) {
  return text.toUpperCase();
}

function lowercase(text) {
  return text.toLowerCase();
}

function capitalize(text) {
  return text
    .split(" ")
    .map((texts) =>
      texts.charAt(0).toUpperCase().concat(texts.slice(1).toLowerCase())
    )
    .join(" ");
}

function showTransform(text) {
  return (resultText.value = text);
}

button.addEventListener("click", () => {
  let texts = inputText.value;

  if (uppercaseCheckbox.checked) {
    showTransform(uppercase(texts));
  } else if (lowercaseCheckbox.checked) {
    showTransform(lowercase(texts));
  } else if (capitalizeCheckbox.checked) {
    showTransform(capitalize(texts));
  } else {
    alert("Pilih salah satu opsi!");
  }
});
