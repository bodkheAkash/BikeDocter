package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="login")
public class Login {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public int id;
	@Column
	public String username;
	@Column
	public String password;
	
	@ManyToOne
	@JoinColumn(name="user_type_id")
	Roles role;

	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	public Roles getRole() {
		return role;
	}

	public void setRole(Roles role) {
		this.role = role;
	}

	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Login(String username, String password) {
		super();
		this.username = username;
		this.password = password;
		
	}
	
	
	
}
