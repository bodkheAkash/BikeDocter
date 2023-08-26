package com.example.demo.entities;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

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
@Table(name = "transactions")
public class Transactions {
	
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY )
	private int id ;
	@Column
	private int amount;
	@JsonFormat(pattern = "yyyy-mm-dd")
	@Column
	private Date date;
	
	
	@ManyToOne
	@JoinColumn(name="customer_id")
	Customer customer;
	
	@ManyToOne
	@JoinColumn(name="payment_mode_id")
	Payment_Modes modes;
	
	@OneToOne
	@JoinColumn(name="bookingid")
	Bookings booking;

	public Transactions() {
		super();
	}

	public Transactions(int id, int amount, Date date,  Customer customer,
			Payment_Modes modes, Bookings booking) {
		super();
		this.id = id;
		this.amount = amount;
		this.date = date;
		this.customer = customer;
		this.modes = modes;
		this.booking = booking;
	}

	public Transactions(int amount, Date date,  Customer customer, Payment_Modes modes,
			Bookings booking) {
		super();
		this.amount = amount;
		this.date = date;
		this.customer = customer;
		this.modes = modes;
		this.booking = booking;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Payment_Modes getModes() {
		return modes;
	}

	public void setModes(Payment_Modes modes) {
		this.modes = modes;
	}

	public Bookings getBooking() {
		return booking;
	}

	public void setBooking(Bookings booking) {
		this.booking = booking;
	}




	

}
