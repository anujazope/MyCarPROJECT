package com.test.testrest;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Car {
	@Id 
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	String name;
	String brand;
	String model;
	long min_cost;
	long max_cost;

	public Car(int id, String name, String brand, String model, long min_cost,long max_cost) {
		super();
		this.id = id;
		this.name = name;
		this.brand = brand;
		this.model = model;
		this.min_cost = min_cost;
		this.max_cost = max_cost;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public double getMin_cost() {
		return min_cost;
	}

	public void setMin_cost(long min_cost) {
		this.min_cost = min_cost;
	}

	public double getMax_cost() {
		return max_cost;
	}

	public void setMax_cost(long max_cost) {
		this.max_cost = max_cost;
	}

	public Car() {
		// TODO Auto-generated constructor stub
	}
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
}
