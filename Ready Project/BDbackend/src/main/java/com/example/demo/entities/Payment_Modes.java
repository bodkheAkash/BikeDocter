package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="payment_modes")
public class Payment_Modes {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@Column
	String  payment_mode;

	public Payment_Modes() {
		super();
	}

	public Payment_Modes(int id, String payment_mode) {
		super();
		this.id = id;
		this.payment_mode = payment_mode;
	}

	public Payment_Modes(String payment_mode) {
		super();
		this.payment_mode = payment_mode;
	}

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
