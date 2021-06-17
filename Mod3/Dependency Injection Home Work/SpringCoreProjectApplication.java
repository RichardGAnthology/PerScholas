package com.example.coreproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class SpringCoreProjectApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext Context = SpringApplication.run(SpringCoreProjectApplication.class, args);
		
//		System.out.println("TEST PROJECT");
		
		
//		Employee emp1 = Context.getBean(Employee.class);
//		emp1.show();
		
//		Person p1  = Context.getBean(Person.class);
//		p1.show();
		
		Employee emp1 = Context.getBean(Employee.class);
		emp1.setEmployee_gender('m');
		emp1.setEmployee_salary(223230);
		emp1.setEmployee_previous_salary(123230);
		emp1.setEmployee_bonus(999);
//		emp1.display();
		emp1.show();
		
	}
	
}
