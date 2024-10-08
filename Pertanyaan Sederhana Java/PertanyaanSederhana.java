import java.util.Scanner;
public class PertanyaanSederhana {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String nama;
        int umur;
        String pekerjaan;
        String hobi;
        String pertanyaan;
        String pasangan;

        System.out.println("---------------------------------");
        System.out.println("MASUKAN INFOMARI DIRI");

        System.out.print("Nama : ");
        nama = scanner.nextLine();

        System.out.print("Umur : ");
        umur = scanner.nextInt();

        scanner.nextLine();

        System.out.print("Pekerjaan : ");
        pekerjaan = scanner.nextLine();

        System.out.print("Hobi : ");
        hobi = scanner.nextLine();

        System.out.println("Apakah anda punya pacar?");
        System.out.print("Jawab (Y/T) : ");
        pertanyaan = scanner.nextLine();

        pasangan = switch (pertanyaan) {
            case "Y":
                yield "Punya";
            case "T":
                yield "Tidak";
            default:
                yield "Dirahasiakan";

        };

        System.out.println("---------------------------------");

        System.out.println(" ");

        System.out.println("---------------------------------");
        System.out.println("DATA INFOMARI DIRI");

        System.out.println("Nama : " + nama);
        System.out.println("Umur : " + umur);
        System.out.println("Pekerjaan : " + pekerjaan);
        System.out.println("Hobi : " + hobi);
        System.out.println("Pacar : " + pasangan);

        System.out.println("---------------------------------");
    }
}
