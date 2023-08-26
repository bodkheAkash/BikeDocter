package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Bookings;
import com.example.demo.entities.ServiceCenter;
import com.example.demo.repositories.BookingsRepository;

@Service
public class BookingsService {

	@Autowired
	BookingsRepository bookingRepository;


    public List<Bookings> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Bookings getBookingById(int id) {
        return bookingRepository.findById(id).orElse(null);
    }

    public Bookings createBooking(Bookings booking) {
        // Perform any necessary validation or business logic before saving
        return bookingRepository.save(booking);
    }

    public Bookings updateBooking(int id, Bookings booking) {
        if (bookingRepository.existsById(id)) {
            booking.setId(id);
            return bookingRepository.save(booking);
        }
        return null;
    }

    public void deleteBooking(int id) {
        bookingRepository.deleteById(id);
    }

//	public List<Bookings> getBookingByStatus(String status) {
//		// TODO Auto-generated method stub
//		return bookingRepository.findByStatus(status);
//	}

	
}
