package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Bookings;
import com.example.demo.entities.ServiceCentre;
import com.example.demo.entities.Statuses;
import com.example.demo.repositories.BookingsRepository;
import com.example.demo.repositories.StatusesRepository;

@Service
public class BookingsService {
	
	@Autowired
	BookingsRepository bookrepo;
	
	StatusesRepository statusrepo;
	
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
		return bookrepo.getBookingsByCustomerId(id);
	}
	
	public List<Bookings>getBookingsBySerCenId(int sc_id)
	{
		return bookrepo.getBookingBySerCenId(sc_id);
	}
	
	public Bookings getBookingById(int id) {
        return bookrepo.findById(id).orElse(null);
    }
	
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
        
        booking.setStatus(newStatus);
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

