package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="makes")
public class MakesAdmin {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int id ;
	
	@Column
	String brand;

	public MakesAdmin() {
		super();
		// TODO Auto-generated constructor stub
	}

	public MakesAdmin(int id, String brand) {
		super();
		this.id = id;
		this.brand = brand;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}
	

}
