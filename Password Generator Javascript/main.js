// Generate Password

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const number = document.getElementById("number");
const character = document.getElementById("character");

const lengthPassword = document.getElementById("password-length");
const passwordResult = document.getElementById("password");
const generateButton = document.getElementById("generate");

const allUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const allLowercase = "abcdefghijklmnopqrstuvwxyz";
const allNumber = "0123456789";
const allCharacter = "~!@#$%^&*<>,.";

let allTypePassword = [];
let randomCharacter = [];

// Panjang password
lengthPassword.addEventListener('change', () => {
    if(lengthPassword.value > 32) {
        alert("Maaf, panjang password yang dihasilkan maksimal 32 karakter!");
        lengthPassword.value = "";
    } else if (lengthPassword.value < 0) {
        alert("Maaf, panjang password karakter harus valid!");
        lengthPassword.value = "";
    }
});

// Checkbox
function checkboxesOption() {
    allTypePassword = []; // Reset setiap kali fungsi dipanggil

    if (uppercase.checked) {
        allTypePassword = allTypePassword.concat(allUppercase.split(""));
    }

    if (lowercase.checked) {
        allTypePassword = allTypePassword.concat(allLowercase.split(""));
    }

    if (number.checked) {
        allTypePassword = allTypePassword.concat(allNumber.split(""));
    }

    if (character.checked) {
        allTypePassword = allTypePassword.concat(allCharacter.split(""));
    }

    console.log(allTypePassword);
}

// Menambahkan event listener untuk setiap checkbox
uppercase.addEventListener('change', checkboxesOption);
lowercase.addEventListener('change', checkboxesOption);
number.addEventListener('change', checkboxesOption);
uppercase.addEventListener('change', checkboxesOption);


function generatePassword(length) {
    // Kembalikan string kosong jika tidak ada karakter yang dipilih
    if (allTypePassword.length === 0) {
        return "";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allTypePassword.length);
        password += allTypePassword[randomIndex]; // Ambil karakter acak
    };

    return password; // Kembalikan password yang dihasilkan
}

// Generate password ketika button di klik
generateButton.addEventListener('click', () => {
    let passwordLength = parseInt(lengthPassword.value);
    let password = generatePassword(passwordLength);
    passwordResult.value = password;
});