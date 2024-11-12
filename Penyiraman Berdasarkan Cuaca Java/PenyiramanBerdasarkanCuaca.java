import java.util.Scanner;
import java.util.Calendar;
import java.util.concurrent.ThreadLocalRandom;

public class PenyiramanBerdasarkanCuaca {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        Calendar date = Calendar.getInstance();

        int indexRandom = ThreadLocalRandom.current().nextInt(0, 3);

        int option;
        boolean optionFlow = true;

        String[] cuaca = {
                "CERAH",
                "BERAWAN",
                "HUJAN",
        };

        String cuacaSekarang = cuaca[indexRandom];

        String[] month = {
                "JANUARI",
                "FEBRUARI",
                "MARET",
                "APRIL",
                "MEI",
                "JUNI",
                "JULI",
                "AGUSTUS",
                "SEPTEMBER",
                "OKTOBER",
                "NOVEMBER",
                "DESEMBER"
        };

        String[] day = {
                "MINGGU",
                "SENIN",
                "SELASA",
                "RABU",
                "KAMIS",
                "JUM'AT",
                "SABTU"
        };

        String[] jenisTanaman = {
                "PADI",
                "JAGUNG",
                "CABAI",
                "TOMAT"
        };

        lines();

        System.out.println(" PENYIRAMAN TANAMAN");

        lines();

        System.out.println(" " + day[date.get(Calendar.DAY_OF_WEEK)] + " | " + date.get(Calendar.DAY_OF_MONTH) + " - " + month[date.get(Calendar.MONTH)] + " - " + date.get(Calendar.YEAR));
        System.out.println(" INFO | CUACA HARI INI SEDANG " + cuacaSekarang);

        lines();

        pilihanTanaman(jenisTanaman);

        lines();

        System.out.print(" MASUKAN PILIHAN = ");
        option = input.nextInt();
        option -= 1;

        lines();

        String infoPilihan = switch (option) {
            case 0, 1, 2, 3 -> " ANDA MEMILIH JENIS TANAMAN " + jenisTanaman[option] + " UNTUK MELAKUKAN PENYIRAMAN.";
            default -> {
                optionFlow = false;
                yield " ANDA MEMILIH OPSI YANG SALAH!";
            }
        };

        if (optionFlow) {
            System.out.println(infoPilihan);
        lines();
        }

        if (optionFlow) {
            System.out.println(" INFORMASI JUMLAH PENYIRAMAN AIR");
            if (option == 1) {
                tampilkanInfo(indexRandom, cuacaSekarang, jenisTanaman[option]);
            } else if (option == 2) {
                tampilkanInfo(indexRandom, cuacaSekarang, jenisTanaman[option]);
            } else if (option == 3) {
                tampilkanInfo(indexRandom, cuacaSekarang, jenisTanaman[option]);
            } else {
                tampilkanInfo(indexRandom, cuacaSekarang, jenisTanaman[option]);
            }
        } else {
            System.out.println(infoPilihan);
        }

        lines();
    }

    private static void pilihanTanaman(String[] tanaman) {
        int no = 1;
        for (String jenisTanaman : tanaman) {
            System.out.println(" " + no + ". " + jenisTanaman);
            no++;
        }
    }

    private static void tampilkanInfo(int option, String cuaca, String tanaman) {
        int airCerah;
        int airMendung;

        switch (tanaman) {
            case "PADI" -> {
                airCerah = 65;
                airMendung = 40;
            }
            case "JAGUNG" -> {
                airCerah = 50;
                airMendung = 25;
            }
            case "CABAI" -> {
                airCerah = 45;
                airMendung = 30;
            }
            case "TOMAT" -> {
                airCerah = 40;
                airMendung = 25;
            }
            default -> {
                airCerah = 0;
                airMendung = 0;
            }
        }

        if (option == 0) {
            System.out.println(" CUACA SEDANG " + cuaca + " JUMLAH AIR UNTUK PENYIRAMAN TANAMAN JENIS " + tanaman + " ADALAH " + airCerah + " LITER.");
        } else if (option == 1) {
            System.out.println(" CUACA SEDANG " + cuaca + " JUMLAH AIR UNTUK PENYIRAMAN TANAMAN JENIS " + tanaman + " ADALAH " + airMendung + " LITER.");
        } else {
            System.out.println(" CUACA SEDANG " + cuaca + " TIDAK PERLU MELAKUKAN PENYIRAMAN!");
        }
    }

    private static void lines() {
        System.out.println("\u2500".repeat(100));
    }
}
