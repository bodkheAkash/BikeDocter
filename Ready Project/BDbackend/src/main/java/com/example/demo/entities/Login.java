package com.example.demo.entities;

import org.hibernate.annotations.ManyToAny;

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
@Table(name = "login")
public class Login {
	
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private int id;
	
	@Column
	private String username,password,answer;
	
	@ManyToOne
	@JoinColumn(name="user_type_id")
	Role role;
	
	@OneToOne
	@JoinColumn(name="security_ques_id")
	SecurityQuestion security_ques_id;

	public Login() {
		super();
	}
	public Login(String username, String password, String answer, Role role, SecurityQuestion security_ques_id) {
		super();
		this.username = username;
		this.password = password;
		this.answer = answer;
		this.role = role;
		this.security_ques_id = security_ques_id;
	}

	public Login(int id, String username, String password, String answer, Role role,
			SecurityQuestion security_ques_id) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.answer = answer;
		this.role = role;
		this.security_ques_id = security_ques_id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

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

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public SecurityQuestion getSecurity_ques_id() {
		return security_ques_id;
	}

	public void setSecurity_ques_id(SecurityQuestion security_ques_id) {
		this.security_ques_id = security_ques_id;
	}


	

}
