package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Bookings;
import com.example.demo.entities.Customer;

@Repository
public interface BookingsRepository extends JpaRepository<Bookings, Integer> {
	
	@Query("select b from Bookings b where b.customer=:c")
	public List<Bookings>getBookingsByCustomerId(Customer c);

}
