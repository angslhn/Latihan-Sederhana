const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const kali = document.getElementById('kali');
const bagi = document.getElementById('bagi');
const tambah = document.getElementById('tambah');
const kurang = document.getElementById('kurang');
const hasil = document.getElementById('hasil');
const angkaPertama = document.getElementById('angka-pertama');
const angkaKedua = document.getElementById('angka-kedua');
const button = document.getElementById('button');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            checkboxes.forEach(checkboxOther => {
                if (checkboxOther != checkbox) {
                    checkboxOther.checked = false;
                }
            });
        };
    });
});

function operasiKali(angkaPertama, angkaKedua) {
    return angkaPertama * angkaKedua;
}

function operasiBagi(angkaPertama, angkaKedua) {
    return angkaPertama / angkaKedua;
}

function operasiTambah(angkaPertama, angkaKedua) {
    return angkaPertama + angkaKedua;
}

function operasiKurang(angkaPertama, angkaKedua) {
    return angkaPertama - angkaKedua;
}


function showHasil(nilai) {
    hasil.value = nilai;
}


button.addEventListener('click', () => {
    let nilaiAngkaPertama = parseInt(angkaPertama.value);
    let nilaiAngkaKedua = parseInt(angkaKedua.value);

    if (kali.checked) {
        let hasil = operasiKali(nilaiAngkaPertama, nilaiAngkaKedua);
        showHasil(hasil);
    } else if (bagi.checked) {
        let hasil = operasiBagi(nilaiAngkaPertama, nilaiAngkaKedua);
        showHasil(hasil);
    } else if (tambah.checked) {
        let hasil = operasiTambah(nilaiAngkaPertama, nilaiAngkaKedua);
        showHasil(hasil);
    } else if (kurang.checked) {
        let hasil = operasiKurang(nilaiAngkaPertama, nilaiAngkaKedua);
        showHasil(hasil);
    } else {
        alert("Pilih salah satu opsi!");
    }
});