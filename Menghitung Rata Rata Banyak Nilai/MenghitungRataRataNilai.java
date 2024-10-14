import java.util.Scanner;
public class MenghitungRataRataNilai {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int jumlahBanyakNilai;
        int nilaiRataRata;
        int totalNilai = 0;
        int nilai;

        line();

            System.out.println("MENGHITUNG RATA-RATA NILAI");

        line();

            System.out.print("Jumlah nilai akan di hitung -> ");
            jumlahBanyakNilai = input.nextInt();

        line();

            int counter = 1;
            while (counter <= jumlahBanyakNilai) {

                if (jumlahBanyakNilai > 0 && jumlahBanyakNilai <= 15)
                {
                    System.out.print("Masukan nilai ke " + counter + " -> ");
                    nilai = input.nextInt();
                    totalNilai += nilai;
                }
                else if (jumlahBanyakNilai >= 15)
                {
                    System.out.println("Oops! Maaf jumlah banyak nilai yang dihitung maks adalah 15.");
                    line();
                    break;
                }
                else
                {
                    System.out.println("Oops! Maaf program tidak dapat berjalan.");
                    line();
                    break;
                }

                counter++;
            }

            nilaiRataRata = totalNilai / jumlahBanyakNilai;

            if (!(counter == 1))
            {
                line();
                    System.out.println("Total Nilai Adalah " + totalNilai);
                    System.out.println("Hasil Nilai Rata-Rata Adalah " + nilaiRataRata);
                line();
            }
            else if (jumlahBanyakNilai <= 0)
            {
                System.out.println("Oops! Maaf masukan jumlah banyak nilai yang sesuai.");
                line();
            }
    }

    static void line() {
        System.out.println("\u2500".repeat(75));
    }
}
