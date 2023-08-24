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
	@Column
	public String answer;
	
	
	@ManyToOne
	@JoinColumn(name="user_type_id")
	Role role;
	
	@ManyToOne
	@JoinColumn(name="security_ques_id")
	SecurityQuestion security_question_id;

	
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


	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public SecurityQuestion getSecques() {
		return security_question_id;
	}

	public void setSecques(SecurityQuestion secques) {
		this.security_question_id = secques;
	}

	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Login(String username, String password, String answer, Role role, SecurityQuestion secques) {
		super();
		
		this.username = username;
		this.password = password;
		this.answer = answer;
		this.role = role;
		this.security_question_id = secques;
	}

	
		
	
	
	
	
}
