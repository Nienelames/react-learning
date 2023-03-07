package components;

import java.util.*;

public class UserInput {
    private static final Scanner scanner = new Scanner(System.in); 

    public void getString() {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter your name please");
        String userName = scanner.nextLine();
        System.out.println("the name is" + userName);

        System.out.println("Enter your country please?");
        String countryName = scanner.nextLine();
        System.out.println("Your country is" + countryName);

        scanner.close();
    }
}