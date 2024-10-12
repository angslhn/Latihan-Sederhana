// Buat variable yang di butuhkan serta isi dengan mengambil semua element pada html
let dadu;
const showDadu = document.querySelector(".dadu");
const button = document.getElementById("button");
const hidePreview = document.getElementById("preview");

function randomDadu() {
  let dadu = Math.ceil(Math.random() * 6);
  return dadu;
}

let kesempatan = 0;

// Buat event ketika tombok di klik
button.addEventListener("click", () => {
  
  dadu = randomDadu();
  let text = `<img src="Dadu/${dadu}.png" alt="Dadu-${dadu}">`;

  hidePreview.style.display = "none";

  // Jika kesempatan belum habis
  if (dadu == 6) {
    showDadu.innerHTML = text;
    kesempatan -= 1;
  }

  // Jika kesempatan belum habis
  else if (kesempatan < 2) {
    showDadu.innerHTML = text;
    kesempatan += 1;
  }

  // Jika kesempatan habis
  else if (kesempatan == 2){
    alert("Kesempatan kamu sudah habis!");
    location.reload();
  } 
  
  // Jika terjadi kesalahan
  else {
    alert("Program terjadi masalah!");
  };

});

console.log(kesempatan)
