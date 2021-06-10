package oopConceptsProject;

public class Person1 {
	 static int count=0;
	 private String personName;
	 private int personAge;
	 private char personGender;
	 
	 public Person1() {
		 count++;
	 }
	 
	 public String getpersonName() {
		 return personName;
	 }
	 
	 public void setpersonName(String personName) {
		 this.personName = personName;
	 }
	 
	 public int getpersonAge() {
		 return personAge;
	 }
	 
	 public void setpersonAge(int personAge) {
		 this.personAge =personAge;
	 }
	 
	 public char getpersonGender() {
		 return personGender;
	 }
	 
	 public void setpersonGender(char personGender) {
		 this.personGender =personGender;
	 }
	 
	 public static void totalPerson() {
			System.out.println("total person objects are:"+ count);
		}

			 
	}