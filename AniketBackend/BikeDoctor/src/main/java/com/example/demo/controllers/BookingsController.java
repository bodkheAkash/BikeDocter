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

import com.example.demo.entities.BikeAdmin;
import com.example.demo.entities.BookingData;
import com.example.demo.entities.Bookings;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Packages;
import com.example.demo.entities.ServiceCenter;
import com.example.demo.entities.Statuses;
import com.example.demo.services.BikeAdminService;
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
	BikeAdminService bikeser;
	@Autowired
	StatusesService statser;
    @Autowired
    private BookingsService bookingService;

    @GetMapping("/admin/bookings")
    public List<Bookings> getAllBookings1() {
        return bookingService.getAllBookings();
    }

    @GetMapping("/admin/bookings/{id}")
    public Bookings getBookingById(@PathVariable int id) {
        return bookingService.getBookingById(id);
    }

    @PostMapping("/admin/bookings")
    public Bookings createBooking(@RequestBody Bookings booking) {
        return bookingService.createBooking(booking);
    }

    @PutMapping("/admin/bookings/{id}")
    public Bookings updateBooking(@PathVariable int id, @RequestBody Bookings booking) {
        return bookingService.updateBooking(id, booking);
    }

    @DeleteMapping("/admin/bookings/{id}")
    public void deleteBooking(@PathVariable int id) {
        bookingService.deleteBooking(id);
    }

    @GetMapping("/admin/bookingsByCustomerId")
    public Bookings getBookingByCustomerId1(@RequestParam("id") int id) {
        return bookingService.getBookingById(id);
    }

//    @GetMapping("/admin/bookingsByBikeRegNo")
//    public List<Bookings> getBookingByBikeRegNo(@RequestParam("regNo") String regNo) {
//        return bookingService.get(regNo);
//    }

//    @GetMapping("/admin/bookingsByStatus")
//    public List<Bookings> getBookingByStatus(@RequestParam("status") String status) {
//        return bookingService.getBookingByStatus(status);
//    }

    // ... (remaining code)
    @GetMapping("/getAllBookings")
	 public List<Bookings>getAllBookings()
	 {
		 return bookingService.getAllBookings();
	 }
	
	@PostMapping("/registerBooking")
	public Bookings register(@RequestBody BookingData bookdata)
	{
		Customer customer=custser.getCustomerById(bookdata.getCustomer_id());
		Packages packages=packser.getServicePackageById(bookdata.getPackage_id());
		ServiceCenter servicecenter=sercenser.getServiceCenterById(bookdata.getSer_cen_id());
		BikeAdmin bike=bikeser.getBikeById(bookdata.getBike_id());
		Statuses statuses=statser.getStatuses(bookdata.getStatusid());
		Bookings booking=new Bookings(bookdata.getBooking_date(),bookdata.getAppointment_date(),customer,packages,servicecenter,bike,bookdata.getBike_reg_no(),bookdata.getBase_price(),bookdata.getExtra_price(),bookdata.getEstimated_price(),statuses);
		
		return bookingService.createBooking(booking);
	}
	
	@GetMapping("getBookingByCustomerId")
	public List<Bookings> getBookingByCustomerId(@RequestParam("id") int id)
	{
		return (List<Bookings>) bookingService.getBookingById(id);
	}
}


