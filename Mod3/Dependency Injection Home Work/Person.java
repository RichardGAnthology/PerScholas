package com.example.coreproject;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;


@Component
//@Scope(value = "protoype")
public class Person {

	private int pid;
	private String pname;
	private String tech;
	private double lineNumber;
	private double currentPlace;
	private double storeClose;
	private double storeCloseTime;
	private double currentTime;
	
	
	
	
	public double getCurrentPlace() {
		return currentPlace;
	}

	public void setCurrentPlace(double currentPlace) {
		this.currentPlace = currentPlace;
	}

	public double getStoreCloseTime() {
		return storeCloseTime;
	}

	public void setStoreCloseTime(double storeCloseTime) {
		this.storeCloseTime = storeCloseTime;
	}

	public double getcurrentPlace() {
		return currentPlace;
	}
	
	public void setcurrentPlace(double currentPlace) {
		this.currentPlace = currentPlace;
	}
	
	public double getLineNumber() {
		return lineNumber;
	}

	public void setLineNumber(double lineNumber) {
		this.lineNumber = lineNumber;
	}

	public double getStoreClose() {
		return storeClose;
	}

	public void setStoreClose(double storeClose) {
		this.storeClose = storeClose;
	}

	public double getCurrentTime() {
		return currentTime;
	}

	public void setCurrentTime(double currentTime) {
		this.currentTime = currentTime;
	}

@Autowired
@Qualifier("laptop")

private Laptop laptop;

	public Person() {
//		System.out.println("Object created");
	}
	
	public int getPid() {
		return pid;
	}
	
	public void setPid(int pid) {
		this.pid = pid;
	}
	
	public String getPname() {
		return pname;
	}
	
	public void setPname(String pname) {
		this.pname = pname;
	}
	
	public String getTech() {
		return tech;
	}
	
	public void setTech(String tech) {
		this.tech = tech;
	}
	
	public Laptop getLaptop() {
		return laptop;
	}
	
	public void setLaptop(Laptop laptop) {
		this.laptop = laptop;
	}
	
	public double lineNumber() {
		double linePlace = currentPlace + 10;
		return linePlace;
	}
	
	public double storeClose() {
		double timeLeft = storeCloseTime - currentTime;
		return timeLeft;
	}
	
	public void show() {
		System.out.println("Id:" + pid);
		System.out.println("Name:" + pname);
		System.out.println("Tech:" + tech);
		System.out.println("You have " + storeClose() + " hours left before the store closes.");
		System.out.println("You are the " + lineNumber() + "peron in the line");
//		System.out.println("Inside person class show method");
		laptop.setBrand("Apple");
		laptop.setModel(2021);
		laptop.setHours(8);
		laptop.setPrice(800);
		laptop.setPaid(1000);
		laptop.brandname();
	}
}
