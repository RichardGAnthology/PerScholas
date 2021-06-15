package oopConceptsProject;
import java.util.Scanner;

public class Student extends Person implements PersonInterface {
	Scanner scan = new Scanner(System.in);
	
	int student_id;
	double subject1;
	double subject2;
	double subject3;
	double hours;
	String major;
	Address addr;
//	String street;
//	String city;
//	String state;
//	int zipcode;
	
	Student (int id, double subject1, double subject2, double subject3, String major, String name, int age, char gender)
	{
		super(name, age, gender);
		
		this.student_id = id;
		this.subject1 = subject1;
		this.subject2 = subject2;
		this.subject3 = subject3;
		this.major = major;
//		this.hours = hours;
//		this.totalscore = totalscore;
	}
	
	
	
	public void createAddress(String street, String city, String state, int zipcode) {
		addr = new Address();
		addr.street = street;
		addr.city = city;
		addr.state= state;
		addr.zipcode = zipcode;
	}
		
		public void display() {
		System.out.println(ORGANIZATION);
		System.out.println("id: "+ this.student_id);
		super.display();
		
		System.out.println("Please enter your street address.");
		System.out.println("First subject: " + this.subject1);
		System.out.println("Second subject: " + this.subject2);
		System.out.println("Third subject: " + this.subject3);
		System.out.println("Major: " + this.major);
		System.out.println("Street:" + addr.street );
		System.out.println("City:" + addr.city);
		System.out.println("State:" + addr.state);
		System.out.println("Zipcode:" + addr.zipcode);
//		System.out.println("Total hours worked is: " + this.hours);
//		System.out.println("Total score: " + this.totalscore);
	}
		
//		public void display(Student obj) {
//			System.out.println(ORGANIZATION);
//			System.out.println("id: "+ obj.student_id);
//			System.out.println("First subject grade: " + obj.subject1);
//			System.out.println("Second subject grade: " + obj.subject2);
//			System.out.println("Third subject grade: " + obj.subject3);
//			System.out.println("Major: " + obj.major);
////			System.out.println("Total score: " + obj.totalscore);
//		}
		
		
		
		
		
		
		public double calculate(int totalSubjects) {
			double average = ((this.subject1 + this.subject2 + this.subject3)/totalSubjects);
			return average;
		}
		
		//provide days instead of hours. In a week they worked 2 days but how many hours per day. 
		public double labor(int days) {
			double hoursWorked = ((days)*5);
					return hoursWorked;
		}
}