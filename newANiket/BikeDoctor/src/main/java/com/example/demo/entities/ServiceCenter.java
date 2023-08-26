package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "service_centre")
public class ServiceCenter {
	
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private int id;
	
	@Column
	String name,phone,email;
	
	@JoinColumn(name="area_id")
	@OneToOne
	Area area;
	
	@JoinColumn(name="login_id")
	@OneToOne
	Login login;
	@Column
	int status ;
	public ServiceCenter() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ServiceCenter(int id, String name, String phone, String email, Area area, Login login, int status) {
		super();
		this.id = id;
		this.name = name;
		this.phone = phone;
		this.email = email;
		this.area = area;
		this.login = login;
		this.status = status;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Area getArea() {
		return area;
	}
	public void setArea(Area area) {
		this.area = area;
	}
	public Login getLogin() {
		return login;
	}
	public void setLogin(Login login) {
		this.login = login;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	} 	
	
	
	

	


}
