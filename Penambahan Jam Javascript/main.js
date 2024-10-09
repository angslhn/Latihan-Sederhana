const waktuSekarangField = document.getElementById("waktu-sekarang");
const waktuField = document.getElementById("waktu-dari-sekarang");
const operasiWaktuField = document.getElementById("nilai-operasi-waktu");
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const menambahWaktu = document.getElementById("menambah-waktu");
const mengurangWaktu = document.getElementById("mengurang-waktu");
const button = document.getElementById("button");

const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

checkboxes.forEach(checkbox => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      checkboxes.forEach(checkboxOther => {
        if(checkboxOther != checkbox) {
          checkboxOther.checked = false;
        };
      });
    };
  });
});

operasiWaktuField.addEventListener("change", ()=> {
  if (operasiWaktuField.value <= 0 ) {
    alert("Mohon masukan angka yang valid untuk melakukan operasi!");
    operasiWaktuField.value = "";
  }
});


const waktuSekarang = new Date();
waktuSekarangField.value = `${hari[waktuSekarang.getDay()]}, ${waktuSekarang.getDate()} - ${bulan[waktuSekarang.getMonth()]} - ${waktuSekarang.getFullYear()}`;

function operasiMenambahWaktu(inputWaktu) {
  let waktuBaru = new Date(waktuSekarang);
  waktuBaru.setDate(waktuBaru.getDate() + inputWaktu);
  return waktuBaru.getTime();
}

function operasiMengurangWaktu(inputWaktu) {
  let waktuBaru = new Date(waktuSekarang);
  waktuBaru.setDate(waktuBaru.getDate() - inputWaktu);
  return waktuBaru.getTime();
}

function hasilOperasiWaktu(hasilWaktu) {
  let waktuBaru = new Date(hasilWaktu);
  waktuField.value = `${hari[waktuBaru.getDay()]}, ${waktuBaru.getDate()} - ${bulan[waktuBaru.getMonth()]} - ${waktuBaru.getFullYear()}`;
}

button.addEventListener("click", () => {
  let inputWaktu = parseInt(operasiWaktuField.value);

  if (menambahWaktu.checked) {
    hasilOperasiWaktu(operasiMenambahWaktu(inputWaktu));
  } else if (mengurangWaktu.checked) {
    hasilOperasiWaktu(operasiMengurangWaktu(inputWaktu));
  } else {
    alert("Mohon pilih salah satu opsi!");
  };
});


