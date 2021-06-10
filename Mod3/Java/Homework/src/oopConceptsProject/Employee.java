package oopConceptsProject;

public class Employee extends Person implements PersonInterface{
	
	int employee_id;
	double employee_salary;
	double hours;
		
	  Employee (int id, String name, int age, char gender, double salary)
	   {
	    	
	    super(name,age,gender);
	    	
	    this.employee_id = id;
	    this.employee_salary = salary;
//	    this.hours=hours;
	   }
	    
	    public void display() {
	    	
	    	System.out.println(ORGANIZATION);
	    	System.out.println("id :" + this.employee_id);
	    	super.display();
	    	
	    	System.out.println("salary: " + this.employee_salary );
//	    	System.out.println("Total hours worked: " + this.hours);
	    	
	    }
	    	public double calculate(int bonus) {
	    		double netsalary = bonus + this.employee_salary;
	    		return netsalary;
	    	
	    }
	    
	    	public double labor(int hoursWorked) {
	    		double hours = ((hoursWorked)*5);
				return hours;
	    	}

	}

