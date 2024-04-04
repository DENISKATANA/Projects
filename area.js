import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Choose a shape (1. Rectangle, 2. Circle, 3. Triangle):");
        int choice = scanner.nextInt();
        
        switch (choice) {
            case 1:
                System.out.println("Enter length and width of rectangle:");
                double length = scanner.nextDouble();
                double width = scanner.nextDouble();
                double rectangleArea = length * width;
                System.out.println("Area of rectangle: " + rectangleArea);
                break;
            case 2:
                System.out.println("Enter radius of circle:");
                double radius = scanner.nextDouble();
                double circleArea = Math.PI * radius * radius;
                System.out.println("Area of circle: " + circleArea);
                break;
            case 3:
                System.out.println("Enter base and height of triangle:");
                double base = scanner.nextDouble();
                double height = scanner.nextDouble();
                double triangleArea = 0.5 * base * height;
                System.out.println("Area of triangle: " + triangleArea);
                break;
            default:
                System.out.println("Invalid choice!");
        }
        
        scanner.close();
    }
}
