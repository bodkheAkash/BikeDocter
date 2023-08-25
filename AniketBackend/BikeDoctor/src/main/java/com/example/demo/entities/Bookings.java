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

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name ="bookings")
public class Bookings {
	
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	int id;
	
	@JsonFormat(pattern = "yyyy-mm-dd")
	@Column
	Date booking_date,appointment_date;
	
	@ManyToOne
	@JoinColumn(name="customer_id")
	Customer customer;
	
	@ManyToOne
	@JoinColumn(name="package_id")
	Packages packages;
	
	@ManyToOne
	@JoinColumn(name="ser_cen_id")
	ServiceCenter servicecenter;
	
	@ManyToOne
	@JoinColumn(name="bike_id")
	BikeAdmin bike;
	
	@Column
	String bike_reg_no;
	
	@Column
	int base_price,extra_price,estimated_price;

	@ManyToOne
	@JoinColumn(name="statusid")
	Statuses statuses;
	
	public Bookings() {
		super();
	}

	public Bookings(int id, Date booking_date, Date appointment_date, Customer customer, Packages packages,
			ServiceCenter servicecenter, BikeAdmin bike, String bike_reg_no, int base_price, int extra_price,
			int estimated_price, Statuses statuses) {
		super();
		this.id = id;
		this.booking_date = booking_date;
		this.appointment_date = appointment_date;
		this.customer = customer;
		this.packages = packages;
		this.servicecenter = servicecenter;
		this.bike = bike;
		this.bike_reg_no = bike_reg_no;
		this.base_price = base_price;
		this.extra_price = extra_price;
		this.estimated_price = estimated_price;
		this.statuses = statuses;
	}

	public Bookings(Date booking_date, Date appointment_date, Customer customer, Packages packages,
			ServiceCenter servicecenter, BikeAdmin bike, String bike_reg_no, int base_price, int extra_price,
			int estimated_price, Statuses statuses) {
		super();
		this.booking_date = booking_date;
		this.appointment_date = appointment_date;
		this.customer = customer;
		this.packages = packages;
		this.servicecenter = servicecenter;
		this.bike = bike;
		this.bike_reg_no = bike_reg_no;
		this.base_price = base_price;
		this.extra_price = extra_price;
		this.estimated_price = estimated_price;
		this.statuses = statuses;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getBooking_date() {
		return booking_date;
	}

	public void setBooking_date(Date booking_date) {
		this.booking_date = booking_date;
	}

	public Date getAppointment_date() {
		return appointment_date;
	}

	public void setAppointment_date(Date appointment_date) {
		this.appointment_date = appointment_date;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Packages getPackages() {
		return packages;
	}

	public void setPackages(Packages packages) {
		this.packages = packages;
	}

	public ServiceCenter getServicecenter() {
		return servicecenter;
	}

	public void setServicecenter(ServiceCenter servicecenter) {
		this.servicecenter = servicecenter;
	}

	public BikeAdmin getBike() {
		return bike;
	}

	public void setBike(BikeAdmin bike) {
		this.bike = bike;
	}

	public String getBike_reg_no() {
		return bike_reg_no;
	}

	public void setBike_reg_no(String bike_reg_no) {
		this.bike_reg_no = bike_reg_no;
	}

	public int getBase_price() {
		return base_price;
	}

	public void setBase_price(int base_price) {
		this.base_price = base_price;
	}

	public int getExtra_price() {
		return extra_price;
	}

	public void setExtra_price(int extra_price) {
		this.extra_price = extra_price;
	}

	public int getEstimated_price() {
		return estimated_price;
	}

	public void setEstimated_price(int estimated_price) {
		this.estimated_price = estimated_price;
	}

	public Statuses getStatuses() {
		return statuses;
	}

	public void setStatuses(Statuses statuses) {
		this.statuses = statuses;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
