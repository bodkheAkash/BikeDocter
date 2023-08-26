package com.example.demo.controllers;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
import com.example.demo.services.BikesService;
import com.example.demo.services.BookingsService;
import com.example.demo.services.CustomerService;
import com.example.demo.services.PackagesService;
import com.example.demo.services.ServiceCentreService;
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
	ServiceCentreService sercenser;
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
		Customer customer=custser.getByLoginid(bookdata.getCustomer_id());
		
		Packages packages=packser.getPackage(bookdata.getPackage_id());
		
		ServiceCentre servicecentre=sercenser.getServiceCentre(bookdata.getSer_cen_id());
		
		Bikes bike=bikeser.getBike(bookdata.getBike_id());
		
		Statuses statuses=statser.getStatuses(bookdata.getStatus());
		
		Bookings booking=new Bookings(bookdata.getBooking_date(),bookdata.getAppointment_date(),customer,packages,servicecentre,bike,bookdata.getBike_reg_no(),bookdata.getBase_price(),bookdata.getExtra_price(),bookdata.getEstimated_price(),statuses);
		
		return bookser.save(booking);
	}
	
	@GetMapping("/getBookingByCustomerId")
	public List<Bookings>getBookingByCustomerId(@RequestParam("id") int id)
	{
		return bookser.getBookingByCustomerId(id);
	}
	
	@GetMapping("/getBookingsByScId")
	public List<Bookings> getBookingsBySerCenId(@RequestParam("scid")int scid)
	{
		return bookser.getBookingsBySerCenId(scid);
	}

	@PutMapping("/updateBookingStatus/{bookingId}")
	public Bookings updateBookingStatus(@PathVariable("bookingId") int bookingId, @RequestParam("statusId") int statusId) {
	    Bookings booking = bookser.getBookingById(bookingId); // Assuming you have a method to fetch a booking by its ID
	    if (booking == null) {
	        return null;
	    }
	    
	    Statuses newStatus = statser.getStatuses(statusId); // Assuming you have a method to fetch a status by its ID
	    if (newStatus == null) {
	        return null;
	    }
	    
	    booking.setStatus(newStatus);
	    return bookser.save(booking);
	}
	
	@PutMapping("/updateExtraPrice/{bookingId}")
	public Bookings updateExtraPrice(@PathVariable("bookingId") int bookingId, @RequestParam("extra_price") int extraprice) {
	    Bookings booking = bookser.getBookingById(bookingId); // Assuming you have a method to fetch a booking by its ID
	    if (booking == null) {
	        // Handle case when booking is not found
	        return null;
	    }
	    
	    booking.setExtra_price(extraprice);
	    return bookser.save(booking);
	}


//	@GetMapping("/getAllServiceReqsByDateSc")
//	public List<ServiceRequest> getAllServiceReqsByDateSc(@RequestParam("date") String date,
//			@RequestParam("scid") int scid) {
//
//		try {
//			System.out.println(date);
//			Date parsedDate = new SimpleDateFormat("yyyy-MM-dd").parse(date);
//			ServiceCenter srvc = scserv.getScById(scid);
//			return servservice.getAllServiceReqsByDateSc(parsedDate, srvc);
//		} catch (Exception e) {
//			e.printStackTrace();
//			return Collections.emptyList();
//		}
//	}
}
