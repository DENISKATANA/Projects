#include <stdio.h>
#include <math.h>

int main() {
    int choice;
    printf("Choose a shape (1. Rectangle, 2. Circle, 3. Triangle): ");
    scanf("%d", &choice);
    
    switch (choice) {
        case 1:
            double length, width, rectangleArea;
            printf("Enter length and width of rectangle: ");
            scanf("%lf %lf", &length, &width);
            rectangleArea = length * width;
            printf("Area of rectangle: %lf\n", rectangleArea);
            break;
        case 2:
            double radius, circleArea;
            printf("Enter radius of circle: ");
            scanf("%lf", &radius);
            circleArea = M_PI * pow(radius, 2);
            printf("Area of circle: %lf\n", circleArea);
            break;
        case 3:
            double base, height, triangleArea;
            printf("Enter base and height of triangle: ");
            scanf("%lf %lf", &base, &height);
            triangleArea = 0.5 * base * height;
            printf("Area of triangle: %lf\n", triangleArea);
            break;
        default:
            printf("Invalid choice!\n");
    }
    
    return 0;
}
