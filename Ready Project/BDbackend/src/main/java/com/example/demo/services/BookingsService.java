package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Bookings;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Statuses;
import com.example.demo.repositories.BookingsRepository;
import com.example.demo.repositories.StatusesRepository;

@Service
public class BookingsService {
	
	@Autowired
	BookingsRepository bookrepo;
	StatusesRepository statusrepo;
	
	@Autowired
	CustomerService custser;
	
	public List<Bookings>getAllBookings()
	{
		return bookrepo.findAll();
	}
	
	public Bookings save(Bookings booking)
	{
		return bookrepo.save(booking);
	}
	
	public List<Bookings>getBookingByCustomerId(int id)
	{
		Customer c=custser.getById(id);
		return bookrepo.getBookingsByCustomerId(c);
	}
	 public Bookings getBookingById(int id) {
        return bookrepo.findById(id).orElse(null);
    }
	    public Bookings updateBooking(int id, Bookings booking) {
        if (bookrepo.existsById(id)) {
            booking.setId(id);
            return bookrepo.save(booking);
        }
        return null;
    }
 public void deleteBooking(int id) {
	 bookrepo.deleteById(id);
    }
 public Bookings getByBookingId(int id)
 {
	 return bookrepo.findById(id).get();
 }
 public List<Bookings>getBookingsBySerCenId(int sc_id)
	{
		return bookrepo.getBookingBySerCenId(sc_id);
	}
	
//	public Bookings getBookingById(int id) {
//     return bookrepo.findById(id).orElse(null);
// }
//	
	public Bookings updateBookingStatus(int bookingId, int StatusId) {
     Bookings booking = bookrepo.findById(bookingId).orElse(null);
     if (booking == null) {
         // Handle case when booking is not found
         return null;
     }
     
     Statuses newStatus = statusrepo.findById(StatusId).orElse(null);
     if (newStatus == null) {
         // Handle case when status is not found
         return null;
     }
     
     booking.setStatuses(newStatus);
     return bookrepo.save(booking);
 }
	
	public Bookings updateExtraPrice(int bookingId, int extraprice) {
     Bookings booking = bookrepo.findById(bookingId).orElse(null);
     if (booking == null) {
         return null;
     }
     
     booking.setExtra_price(extraprice);
     return bookrepo.save(booking);
 }
}
