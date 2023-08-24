package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="transactions")
public class Transaction {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
	@Column
	public int amount;
	@Column
	public Date date;
	@Column
	public String transaction_number;
	
	@ManyToOne
	@JoinColumn(name="payment_mode_id")
	PaymentMode paymode;
	
	@ManyToOne
	@JoinColumn(name="customer_id")
	Customer customer;

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

	public String getTransaction_number() {
		return transaction_number;
	}

	public void setTransaction_number(String transaction_number) {
		this.transaction_number = transaction_number;
	}

	public PaymentMode getPaymode() {
		return paymode;
	}

	public void setPaymode(PaymentMode paymode) {
		this.paymode = paymode;
	}
	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Transaction() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Transaction(int amount, Date date, String transaction_number, PaymentMode paymode,
			Customer customer) {
		super();
		this.amount = amount;
		this.date = date;
		this.transaction_number = transaction_number;
		this.paymode = paymode;
		this.customer = customer;
	}
	
}
