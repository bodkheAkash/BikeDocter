package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;



@Entity
@Table(name ="ratings")
public class Ratings {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@Column
	int rating;
	
	@Column
	String comment;
	
	
	@OneToOne
	@JoinColumn(name="customer_id") 
	Customer customer;
	
	@ManyToOne
	@JoinColumn(name="serv_cen_id") 
	ServiceCentre serviceCenter;

	public Ratings() {
		super();
	}

	public Ratings(int rating, String comment, Customer customer, ServiceCentre serviceCenter) {
		super();
		this.rating = rating;
		this.comment = comment;
		this.customer = customer;
		this.serviceCenter = serviceCenter;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public ServiceCentre getServiceCenter() {
		return serviceCenter;
	}

	public void setServiceCenter(ServiceCentre serviceCenter) {
		this.serviceCenter = serviceCenter;
	}
	
}
