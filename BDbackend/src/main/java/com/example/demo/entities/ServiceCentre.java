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
@Table(name="service_centre")
public class ServiceCentre {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public int id;
	@Column
	public String name;
	@Column
	public String phone;
	@Column
	public String email;
	@Column
	public int status;
	
	@ManyToOne
	@JoinColumn(name="area_id")
	Area area;
	
	@OneToOne
	@JoinColumn(name="login_id")
	Login login;

	public ServiceCentre() {
		super();
	}

	public ServiceCentre(int id, String name, String phone, String email, int status, Area area, Login login) {
		super();
		this.id = id;
		this.name = name;
		this.phone = phone;
		this.email = email;
		this.status = status;
		this.area = area;
		this.login = login;
	}

	public ServiceCentre(String name, String phone, String email, int status, Area area, Login login) {
		super();
		this.name = name;
		this.phone = phone;
		this.email = email;
		this.status = status;
		this.area = area;
		this.login = login;
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

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
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

	
	

}
