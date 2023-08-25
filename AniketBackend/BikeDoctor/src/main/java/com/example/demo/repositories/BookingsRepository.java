package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Bookings;

@Repository
public interface BookingsRepository extends JpaRepository<Bookings, Integer> {
	
	@Query("select b from Bookings b where b.customer.id=:id")
	public List<Bookings>getBookingsByCustomerId(int id);

//	 @Query("SELECT b FROM Booking b WHERE b.status = :status")
//	public List<Bookings> findByStatus(String status);

}
