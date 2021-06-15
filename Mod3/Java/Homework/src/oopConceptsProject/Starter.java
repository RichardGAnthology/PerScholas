package oopConceptsProject;
import java.util.Scanner;
public class Starter {

	
	
//	static void calculate(int num1, int num2, int num3) {
//		System.out.println("This is the interest: "+ (num1 * num2 * num3)/100);
//	}
//	//SI= P x R x T ÷ 100,
//	//	where P = Principal,
//	//	R = Rate of Interest,
//	//	T = Time Period of the Loan/deposit in years,
//	
//	static void calculate(long num1, long num2) {
//		System.out.println("This is the average: " + ((num1+num2)/2));
//	}
	 
//	static void totalscore(double subject1, double subject2, double subject3) {
//		System.out.println("total score is: " + (subject1+subject2+subject3));
//	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner scan = new Scanner(System.in);
		
		
//		calculate(100,8,15);
//		calculate(544433, 244343);
//		
//		Person person2 = new Person("Richard", 0, 'M');
//		person2.display(person2);
		//change strings to doubles
//		//remove total
////		student1.display(student1);
		//add scan for both student and employee
		
		//STUDENT 
		System.out.println("Welcome to school. Please enter your I.D. number ");
		int id = scan.nextInt();
		
		System.out.println("Please enter the grade for your first subject. ");
		int subject1 = scan.nextInt();
		
		System.out.println("Please enter the grade for your second subject. ");
		int subject2 = scan.nextInt();
		
		System.out.println("Please enter the grade for your third subject. ");
		int subject3 = scan.nextInt();
		
		System.out.println("Please enter your major. ");
		String major = scan.next();
		
		System.out.println("Please enter your name. ");
		String name = scan.next();
		
		System.out.println("Please enter your age. ");
		int age = scan.nextInt();
		
		System.out.println("Please enter your gender. ");
		char gender = scan.next().charAt(0);
		
		System.out.println("Please enter the amount of hours you worked per day in your internship this week.");
		int studentHours = scan.nextInt();
		
		System.out.println("Please enter your street address.");
		String street = scan.next();
		
		System.out.println("Please enter your city.");
		String city = scan.next();
		
		System.out.println("Please enter your state.");
		String state = scan.next();
		
		System.out.println("Please enter your zipcode.");
		int zipcode = scan.nextInt();
		
		
		
		
		
		
		//EMPLOYEE		
		System.out.println("Welcome to work. Please enter your I.D. number");
		int empID = scan.nextInt();
		
		System.out.println("Please enter your name.");
		String empName = scan.next();
		
		System.out.println("Please enter your age.");
		int empAge = scan.nextInt();
		
		System.out.println("Please enter your gender.");
		char empGender = scan.next().charAt(0);
		
		System.out.println("Please enter your salary.");
		double salary = scan.nextDouble();
		
		System.out.println("Please enter the bonus that was assigned to you.");
		int empBonus = scan.nextInt();
		
		System.out.println("Please enter the extra number of hours you worked per day during this week.");
		int empHours = scan.nextInt();
	
		System.out.println("Please enter your street address.");
		String empStreet = scan.next();
		
		System.out.println("Please enter your city.");
		String empCity = scan.next();
		
		System.out.println("Please enter your state.");
		String empState = scan.next();
		
		System.out.println("Please enter your zipcode.");
		int empZipcode = scan.nextInt();
	
		
		System.out.println("\n");
		System.out.println("----------------------");
		System.out.println("Student Info");
		Student student1 = new Student(id, subject1, subject2, subject3, major, name,  age , gender);
		student1.createAddress(street, city, state, zipcode);
		double hours = student1.labor(studentHours);
		System.out.println("Extra hours worked this week: "  + hours);
		double avg = student1.calculate(3);
		System.out.println("Average Score: " + avg );
		student1.display();
		System.out.println("----------------------");
		
		System.out.println("Employee Info");
		Employee emp1 = new Employee(empID,empName,empAge, empGender ,salary);
		emp1.createAddress(empStreet, empCity, empState, empZipcode);
		double bonus = emp1.calculate(empBonus);
		System.out.println("Net salary for this employee after bonus: " + bonus);
		double extraHours = emp1.labor(empHours);
		System.out.println("Extra hours worked this week: " + extraHours);
		emp1.display();
//		Employee emp2 = new Employee(2,"Rasheed A",29,'M',110.00);
//		emp2.display();
//		Employee emp3 = new Employee(3, "Isamar R", 30, 'F', 120.00);
//		emp3.display();
///
		
		
//		Scanner scan = new Scanner(System.in);
//		
//		String name;
//		int age;
//		char gender;
//		
//		Person1 p1 = new Person1();
//		
//		System.out.println("Please enter your name: ");
////		name = scan.next();
//		p1.setpersonName(scan.next());
//		
//		System.out.println("Please enter your age: ");
////		age = scan.nextInt();
//		p1.setpersonAge(scan.nextInt());
//		
//		System.out.println("Please enter your gender: ");
////		gender = scan.next().charAt(0);
//		p1.setpersonGender(scan.next().charAt(0));
		
		
		
//		Person p2 = new Person();
//		
//		System.out.println("Please enter your name: ");
////		name = scan.next();
//		p2.setpersonName(scan.next());
//		
//		System.out.println("Please enter your age: ");
//		age = scan.nextInt();
//		p2.setpersonAge(age);
//		
//		System.out.println("Please enter your gender: ");
//		gender = scan.next().charAt(0);
//		p2.setpersonGender(gender);
		
//		System.out.println("Your name is: " + p1.getpersonName());
//		System.out.println("Your age is: " + p1.getpersonAge());
//		System.out.println("Your gender is " + p1.getpersonGender());
		
//		System.out.println("Your name is: " + p2.getPname());
//		System.out.println("Your age is: " + p2.getPage());
//		System.out.println("Your gender is " + p2.getPgender());
//		
		
		scan.close();
	}

}
