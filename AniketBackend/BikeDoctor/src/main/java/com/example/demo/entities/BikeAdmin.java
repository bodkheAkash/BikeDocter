package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "bikes")
public class BikeAdmin {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int id ;
	
	@ManyToOne
	MakesAdmin make_id;
	
	
	@Column
	String model ;


	public BikeAdmin() {
		super();
		// TODO Auto-generated constructor stub
	}


	public BikeAdmin(int id, MakesAdmin make_id, String model) {
		super();
		this.id = id;
		this.make_id = make_id;
		this.model = model;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public MakesAdmin getMake_id() {
		return make_id;
	}


	public void setMake_id(MakesAdmin make_id) {
		this.make_id = make_id;
	}


	public String getModel() {
		return model;
	}


	public void setModel(String model) {
		this.model = model;
	}
	
	

}
