package Homework;
import java.util.Scanner;
public class calculator {
		
		static int add(int numOne, int numTwo) {
			return numOne + numTwo;
		}
		
		static int subtract(int numThree, int numFour) {
			return numThree - numFour;
		}
		
		static int multiply(int numFive, int numSix) {
			return numFive * numSix;
		}
		
		static void divide(int numSeven, int numEight) {
			int division = numSeven / numEight;
			int modulo = numSeven % numEight;
			System.out.println("Your quotient is "+ division);
			System.out.println("Your modulus is " + modulo);
		}
			
		
		public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		String operator;
		
		System.out.println(
				"Welcome to a simple calculator!" + '\n' + '\n' 
				+ "Please choose an operator between:" + '\n'
				+ "Add - Subtract - multiply - divide." + '\n'
				+ "if you'd like to close the calculator, simply type: 'end'."+ '\n' + '\n' 
				+ "And don't forget about case sensitivity!"
				);
		operator = scan.nextLine();
		
		switch(operator) {
		
		case "Add":
			System.out.println("Enter the first number.");
			int numOne = scan.nextInt();
			System.out.println("Enter the second number.");
			int numTwo = scan.nextInt();
			System.out.println("Your sum is " + add(numOne, numTwo));
		break;
		
		case "Subtract":
			System.out.println("Enter the first number.");
			int numThree = scan.nextInt();
			System.out.println("Enter the second number.");
			int numFour = scan.nextInt();
			System.out.println("Your difference is " + subtract(numThree, numFour));
		break;
		
		case "Multiply":
			System.out.println("Enter the first number.");
			int numFive = scan.nextInt();
			System.out.println("Enter the second number.");
			int numSix = scan.nextInt();
			System.out.println("Your product is "+multiply(numFive, numSix));
		break;
		
		case "Divide":
			System.out.println("Enter the first number.");
			int numSeven = scan.nextInt();
			
			System.out.println("Enter the second number.");
			int numEight = scan.nextInt();
			 divide(numSeven, numEight);
		break;
		
		case "end":
			System.out.println("The calculator is off.");
			System.exit(0);
			
		break;
		
		default:
			System.out.println("Please enter one of the listed operators.");
		}
		
		scan.close();
	}
}
