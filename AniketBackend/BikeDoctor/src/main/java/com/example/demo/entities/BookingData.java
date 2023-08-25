package com.example.demo.entities;

import java.sql.Date;

public class BookingData {
	
	Date booking_date,appointment_date;
	int customer_id,package_id,ser_cen_id,bike_id,base_price,extra_price,estimated_price,statusid;
	String bike_reg_no;
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
	public int getCustomer_id() {
		return customer_id;
	}
	public void setCustomer_id(int customer_id) {
		this.customer_id = customer_id;
	}
	public int getPackage_id() {
		return package_id;
	}
	public void setPackage_id(int package_id) {
		this.package_id = package_id;
	}
	public int getSer_cen_id() {
		return ser_cen_id;
	}
	public void setSer_cen_id(int ser_cen_id) {
		this.ser_cen_id = ser_cen_id;
	}
	public int getBike_id() {
		return bike_id;
	}
	public void setBike_id(int bike_id) {
		this.bike_id = bike_id;
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
	public int getStatusid() {
		return statusid;
	}
	public void setStatusid(int statusid) {
		this.statusid = statusid;
	}
	public String getBike_reg_no() {
		return bike_reg_no;
	}
	public void setBike_reg_no(String bike_reg_no) {
		this.bike_reg_no = bike_reg_no;
	}
	
	

}
