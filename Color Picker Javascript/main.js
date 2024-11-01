const showColor = document.getElementById('color');
const showColorHex = document.getElementById("hex-color");

const inputColorPicker = document.getElementById("color-picker");

const inputRange = document.querySelectorAll("input[type='range']");

const showRangeRed = document.getElementById("red-show-color");
const showRangeGreen = document.getElementById("green-show-color");
const showRangeBlue = document.getElementById("blue-show-color");

inputColorPicker.addEventListener('input', () => {
    let color = inputColorPicker.value;

    showColor.style.backgroundColor = color;
    showColorHex.textContent = color;
});

let red = 128;
let green = 128;
let blue = 128;

inputRange.forEach(rangeColor => {
    rangeColor.addEventListener("input", () => {

        if (rangeColor.getAttribute("name") == "red") {
            showRangeRed.textContent = rangeColor.value;
            red = rangeColor.value;
        } else if (rangeColor.getAttribute("name") == "green") {
            showRangeGreen.textContent = rangeColor.value;
            green = rangeColor.value;
        } else if (rangeColor.getAttribute("name") == "blue") {
            showRangeBlue.textContent = rangeColor.value;
            blue = rangeColor.value;
        }

        showColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

        const toHex = (value) => {
            let hex = parseInt(value).toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }

        let hexColor = `${toHex(red)}${toHex(green)}${toHex(blue)}`;
        showColorHex.textContent = hexColor;
    });
});