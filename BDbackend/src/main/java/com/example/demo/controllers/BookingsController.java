package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Bikes;
import com.example.demo.entities.BookingData;
import com.example.demo.entities.Bookings;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Packages;
import com.example.demo.entities.ServiceCentre;
import com.example.demo.entities.Statuses;
import com.example.demo.services.AreaService;
import com.example.demo.services.BikesService;
import com.example.demo.services.BookingsService;
import com.example.demo.services.CustomerService;
import com.example.demo.services.PackagesService;
import com.example.demo.services.ServiceCenterService;
import com.example.demo.services.StatusesService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BookingsController {
	
	@Autowired
	 BookingsService bookser;
	@Autowired
	CustomerService custser;
	@Autowired
	PackagesService packser;
	@Autowired
	ServiceCenterService sercenser;
	@Autowired
	BikesService bikeser;
	@Autowired
	StatusesService statser;
	
	@GetMapping("/getAllBookings")
	 public List<Bookings>getAllBookings()
	 {
		 return bookser.getAllBookings();
	 }
	
	@PostMapping("/registerBooking")
	public Bookings register(@RequestBody BookingData bookdata)
	{
		Customer customer=custser.getById(bookdata.getCustomer_id());
		Packages packages=packser.getPackage(bookdata.getPackage_id());
		ServiceCentre servicecenter=sercenser.getServiceCenter(bookdata.getSer_cen_id());
		Bikes bike=bikeser.getBike(bookdata.getBike_id());
		Statuses statuses=statser.getStatuses(bookdata.getStatusid());
		Bookings booking=new Bookings(bookdata.getBooking_date(),bookdata.getAppointment_date(),customer,packages,servicecenter,bike,bookdata.getBike_reg_no(),bookdata.getBase_price(),bookdata.getExtra_price(),bookdata.getEstimated_price(),statuses);
		
		return bookser.save(booking);
	}
	
	@GetMapping("getBookingByCustomerId")
	public List<Bookings>getBookingByCustomerId(@RequestParam("id") int id)
	{
		System.out.println(id);
		return bookser.getBookingByCustomerId(id);
	}

}
