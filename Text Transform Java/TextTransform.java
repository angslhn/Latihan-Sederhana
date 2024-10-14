import java.util.Scanner;
public class TextTransform {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        String text;
        byte options;

        lines();
            System.out.println(" TEXT TRANSFORM ");
        lines();
            System.out.println(" Select one of the options below");
            System.out.println(" 1. Capitalize");
            System.out.println(" 2. Uppercase");
            System.out.println(" 3. Uppercase");
        lines();
            System.out.print(" Menu selected -> ");
            options = input.nextByte();
            input.nextLine();
        lines();

            if (options == 1) {
                System.out.println(" You choose transform to capitalize.");
                System.out.print(" Input text -> ");
                text = input.nextLine();

                lines();
                System.out.println(" Text transform -> " + capitalize(text));
                lines();
            }
            else if (options == 2)
            {
                System.out.println(" You choose transform to uppercase.");
                System.out.print(" Input text -> ");
                text = input.nextLine();

                lines();
                System.out.println(" Text transform -> " + uppercase(text));
                lines();
            }
            else if (options == 3)
            {
                System.out.println(" You choose transform to lowercase.");
                System.out.print(" Input text -> ");
                text = input.nextLine();

                lines();
                System.out.println(" Text transform -> " + lowercase(text));
                lines();
            }
            else
            {
                System.out.println(" Oops! Selected menu option is not available.");
                lines();
            }

    }

    static String capitalize(String text) {
        String[] textToTransform = text.split(" ");
        String[] resultTextToTransform = new String[textToTransform.length];

        for (int iteration = 0; iteration < textToTransform.length; iteration++) {
            String toTransform = textToTransform[iteration];
            String textTransform = toTransform.substring(0, 1).toUpperCase().concat(toTransform.substring(1).toLowerCase());
            resultTextToTransform[iteration] = textTransform;
        }
        return String.join(" ", resultTextToTransform);
    }

    static String uppercase(String text) {
        return text.toUpperCase();
    }

    static String lowercase(String text) {
        return text.toLowerCase();
    }

    static void lines() {
        System.out.println("\u2500".repeat(75));
    }

}
