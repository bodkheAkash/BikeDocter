package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Bookings;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Statuses;

@Repository
public interface BookingsRepository extends JpaRepository<Bookings, Integer> {
	
	@Query("select b from Bookings b where b.customer=:c")
	public List<Bookings>getBookingsByCustomerId(Customer c);
	
	@Query("select b from Bookings b where b.servicecenter.id=:serc")
	public List<Bookings> getBookingBySerCenId(int serc);
	
	@Modifying
    @Query("update Bookings b set b.statuses = :newStatus where b.id = :bookingId")
    void updateBookingStatusById(@Param("bookingId") int bookingId, @Param("newStatus") Statuses newStatus);
	
	@Modifying
    @Query("update Bookings b set b.extra_price = :extprc where b.id = :id")
    void updateExtraPriceById(@Param("id") int bookingId, @Param("extprc") int extraprice);

}
