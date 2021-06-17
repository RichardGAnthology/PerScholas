package com.example.coreproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Employee {

	private char employee_gender;
	private double employee_salary;
	private double employee_previous_salary;
	private double employee_bonus;

	public double getEmployee_bonus() {
		return employee_bonus;
	}

	public void setEmployee_bonus(double employee_bonus) {
		this.employee_bonus = employee_bonus;
	}

	public double getEmployee_previous_salary() {
		return employee_previous_salary;
	}

	public void setEmployee_previous_salary(double employee_previous_salary) {
		this.employee_previous_salary = employee_previous_salary;
	}

	@Autowired
	private Person person;

	public char getEmployee_gender() {
		return employee_gender;
	}

	public void setEmployee_gender(char employee_gender) {
		this.employee_gender = employee_gender;
	}

	public double getEmployee_salary() {
		return employee_salary;
	}

	public void setEmployee_salary(double employee_salary) {
		this.employee_salary = employee_salary;
	}
	
	public double difference() {
		 double differenceInSalary = employee_salary - employee_previous_salary;
		 return differenceInSalary;
	}

	public double bonus() {
		double netSalary = employee_bonus + employee_salary;
		return netSalary;
	}
//	public void display() {
//		System.out.println("Gender :" + this.employee_gender);
//
//		System.out.println("Salary: " + this.employee_salary);
//	}

	public void show() {
//		System.out.println(getEmployee_gender());
//		System.out.println(getEmployee_salary());
		person.setPname("Richard");
		System.out.println("Gender :" + this.employee_gender);
		person.setPid(1);
		person.setTech("Mac");
		person.setcurrentPlace(15);
		person.setCurrentTime(3);
		person.setStoreCloseTime(10);
		person.show();
//		System.out.println("Inside person, Employee class method");
		System.out.println("Salary: " + this.employee_salary);
		System.out.println("Previous salary: " + this.employee_previous_salary);
		System.out.println("Difference in salary: " + difference());
		System.out.println("The net Salary will be the bonus of " + employee_bonus + " + " + "the salary of " + employee_salary + " which equals: " + bonus());
	}

}