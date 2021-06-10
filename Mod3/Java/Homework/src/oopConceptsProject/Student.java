package oopConceptsProject;

public class Student extends Person implements PersonInterface {
	
	int student_id;
	double subject1;
	double subject2;
	double subject3;
	double hours;
	String major;
//	int totalscore;
	
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
		
		public void display() {
		System.out.println(ORGANIZATION);
		System.out.println("id: "+ this.student_id);
		super.display();
		System.out.println("First subject: " + this.subject1);
		System.out.println("Second subject: " + this.subject2);
		System.out.println("Third subject: " + this.subject3);
		System.out.println("Major: " + this.major);
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