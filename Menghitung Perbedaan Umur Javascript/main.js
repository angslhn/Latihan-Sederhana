const textHariSekarang = document.getElementById("hari-sekarang");
const textPerbedaanHari = document.getElementById("perbedaan-hari");
const inputHariKelahiranPertama =  document.getElementById("hari-kelahiran-pertama");
const inputHariKelahiranKedua = document.getElementById("hari-kelahiran-kedua");
const buttonMulai = document.getElementById("button-mulai");

const waktuSekarang = new Date();
const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

let hariSekarang = waktuSekarang.getDay();
let tanggalSekarang = waktuSekarang.getDate();
let bulanSekarang = waktuSekarang.getMonth();
let tahunSekarang = waktuSekarang.getFullYear();

textHariSekarang.value = `${hari[hariSekarang]}, ${tanggalSekarang}-${bulan[bulanSekarang]}-${tahunSekarang}`;

function dapatkanHariKelahiran(hari) {
    let tanggal = new Date(hari);
    return isNaN(tanggal.getTime()) ? null : tanggal.getTime();
};

function hitungPerbedaanHariKelahiran(kelahiranPertama, kelahiranKedua) {
    let waktuPerbedaan = Math.abs(kelahiranPertama - kelahiranKedua);
    return Math.floor(waktuPerbedaan / (1000 * 60 * 60 * 24));
}

function konversiHari (totalHari) {
    let tahun = Math.floor(totalHari / 365);
    let sisaHariSetelahTahun = totalHari % 365;
    let bulan = Math.floor(sisaHariSetelahTahun / 30.42);
    let hari = Math.floor(sisaHariSetelahTahun % 30.42);

    let tampilkanWaktu = [];
    if (tahun > 0) tampilkanWaktu.push(`${tahun} Tahun`);
    if (bulan > 0) tampilkanWaktu.push(`${bulan} Bulan`);
    tampilkanWaktu.push(`${hari} Hari`);

    return tampilkanWaktu.join(" ");
}

buttonMulai.addEventListener("click", () => {
    let hariLahirPertama = inputHariKelahiranPertama.value; 
    let hariLahirKedua = inputHariKelahiranKedua.value;

    if (!hariLahirPertama || !hariLahirKedua) {
        alert("Mohon masukan hari dari kedua input!");
        return;
    }

    let hariKelahiranPertama = dapatkanHariKelahiran(hariLahirPertama);
    let hariKelahiranKedua = dapatkanHariKelahiran(hariLahirKedua);

    if (hariKelahiranPertama === null || hariKelahiranKedua === null) {
        alert("Format tanggal tidak valid! Silakan masukkan tanggal dengan format yang benar.");
        return;
    }

    let hasilHariPerbedaanKelahiran = hitungPerbedaanHariKelahiran(hariKelahiranPertama, hariKelahiranKedua);
    textPerbedaanHari.value = konversiHari(hasilHariPerbedaanKelahiran);
});