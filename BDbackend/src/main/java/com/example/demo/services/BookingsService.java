package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Bookings;
import com.example.demo.repositories.BookingsRepository;

@Service
public class BookingsService {
	
	@Autowired
	BookingsRepository bookrepo;
	
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
}
