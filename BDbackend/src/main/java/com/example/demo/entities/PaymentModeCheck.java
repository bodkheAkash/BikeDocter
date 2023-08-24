package com.example.demo.entities;

import org.springframework.stereotype.Component;

@Component
public class PaymentModeCheck {
	public int id;
	public String payment_mode;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPayment_mode() {
		return payment_mode;
	}
	public void setPayment_mode(String payment_mode) {
		this.payment_mode = payment_mode;
	}
	
	

}
