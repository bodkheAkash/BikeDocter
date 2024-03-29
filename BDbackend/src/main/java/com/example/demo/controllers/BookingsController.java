package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
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
		int baseprice=packser.getBaseCost(bookdata.getPackage_id());
		ServiceCentre servicecenter=sercenser.getServiceCenter(bookdata.getSer_cen_id());
		Bikes bike=bikeser.getBike(bookdata.getBike_id());
		Statuses statuses=statser.getStatuses(bookdata.getStatusid());
		Bookings booking=new Bookings(bookdata.getBooking_date(),bookdata.getAppointment_date(),customer,packages,servicecenter,bike,bookdata.getBike_reg_no(),baseprice,bookdata.getExtra_price(),bookdata.getEstimated_price(),statuses);
		
		return bookser.save(booking);
	}
	
	@GetMapping("getBookingByCustomerId")
	public List<Bookings>getBookingByCustomerId(@RequestParam("id") int id)
	{
		System.out.println(id);
		return bookser.getBookingByCustomerId(id);
	}
	@GetMapping("/getByBookingId")
	public Bookings getByBookingId(@RequestParam("id") int id)
	{
		return bookser.getByBookingId(id);
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
	    
	    booking.setStatuses(newStatus);
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
	   @PutMapping("/admin/bookings/{id}")
	    public Bookings updateBooking(@PathVariable int id, @RequestBody Bookings booking) {
	        return bookser.updateBooking(id, booking);
	    }

	    @DeleteMapping("/admin/bookings/{id}")
	    public void deleteBooking(@PathVariable int id) {
	    	bookser.deleteBooking(id);
	    }
	    

	    @GetMapping("/admin/bookings")
	    public List<Bookings> getAllBookings1() {
	        return bookser.getAllBookings();
	    }
	    
	    @PostMapping("/admin/bookings")
	    public Bookings createBooking(@RequestBody Bookings booking) {
	        return bookser.createBooking(booking);
	    }

}
