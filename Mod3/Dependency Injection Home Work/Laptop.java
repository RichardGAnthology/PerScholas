package com.example.coreproject;
import org.springframework.stereotype.Component;

@Component
public class Laptop {

	private int model;
	private String brand;
	private double change;
	private String batteryLeft;
	private double price;
	private double paid;
	private double hours;
	
	public double getHours() {
		return hours;
	}

	public void setHours(double hours) {
		this.hours = hours;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public double getPaid() {
		return paid;
	}

	public void setPaid(double paid) {
		this.paid = paid;
	}

	public double getChange() {
		return change;
	}

	public void setChange(double price) {
		this.change = price;
	}

	public String getBatteryLeft() {
		return batteryLeft;
	}

	public void setBatteryLeft(String batteryLeft) {
		this.batteryLeft = batteryLeft;
	}

	public int getModel() {
		return model;
	}
	
	public void setModel(int model) {
		this.model = model;
	}
	
	public String getBrand() {
		return brand;
	}
	
	public void setBrand(String brand) {
		this.brand = brand;
	}
	
	public double change() {
		double lapChange = paid - price;
		return lapChange;
	}
	
	public double batteriesLeft() {
		double lapBatteriesLeft = 100 - hours;
		return lapBatteriesLeft;
	}
	
	
@Override

public String toString() {
	return "Laptop [model="+model+ ",brand=" + brand  + ", getClass() = " + getClass() + ", hashCode()" + hashCode() + ",toString() =" + super.toString()+"]";}

public void brandname() {
	System.out.println("The laptop brand name is: " + brand);
	System.out.println("The laptop model year is: " + model);
	System.out.println("The change left after purchasing the laptop is: " + change());
	System.out.println("The amount of percent of battery hours left is: " + batteriesLeft());
}
	
}
