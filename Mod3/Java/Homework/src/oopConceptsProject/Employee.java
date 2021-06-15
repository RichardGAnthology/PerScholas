package oopConceptsProject;

public class Employee extends Person implements PersonInterface{
	
	int employee_id;
	double employee_salary;
	double hours;
	Address addr;
		
	  Employee (int id, String name, int age, char gender, double salary)
	   {
	    	
	    super(name,age,gender);
	    	
	    this.employee_id = id;
	    this.employee_salary = salary;
//	    this.hours=hours;
	   }
	  
//	  public void createAddress(String street, String city, String state, int zipcode) {
//			addr = new Address();
//			addr.street = street;
//			addr.city = city;
//			addr.state= state;
//			addr.zipcode = zipcode;
//		}
	  
	  public void createAddress(String street, String city, String state, int zipcode) {
		  addr = new Address();
		  addr.street = street;
		  addr.city = city;
		  addr.state = state;
		  addr.zipcode = zipcode;
	  }
	    
	    public void display() {
	    	
	    	System.out.println(ORGANIZATION);
	    	System.out.println("id :" + this.employee_id);
	    	super.display();
	    	
	    	System.out.println("salary: " + this.employee_salary );
//	    	System.out.println("Total hours worked: " + this.hours);
	    	
	    	System.out.println("Street:" + addr.street);
	    	System.out.println("City:" + addr.city);
	    	System.out.println("State:" + addr.state);
	    	System.out.println("Zipcode:" + addr.zipcode);
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

