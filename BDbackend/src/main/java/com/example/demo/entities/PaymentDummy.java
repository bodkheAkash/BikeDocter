package com.example.demo.entities;

import java.sql.Date;

public class PaymentDummy {
	
	int amount,customer_id,payment_mode_id,bookingid;
	
	Date date;

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public int getCustomer_id() {
		return customer_id;
	}

	public void setCustomer_id(int customer_id) {
		this.customer_id = customer_id;
	}

	public int getPayment_mode_id() {
		return payment_mode_id;
	}

	public void setPayment_mode_id(int payment_mode_id) {
		this.payment_mode_id = payment_mode_id;
	}

	public int getBookingid() {
		return bookingid;
	}

	public void setBookingid(int bookingid) {
		this.bookingid = bookingid;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	
	

}
