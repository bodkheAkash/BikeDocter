package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Ratings;
import com.example.demo.entities.ServiceCentre;


@Repository
public interface RatingsRepository extends JpaRepository<Ratings, Integer> {
	
//	@Query("SELECT AVG(r.rating) FROM Ratings r WHERE r.serviceCenter.id = :id GROUP BY r.serviceCenter.id")
	@Query("select r rating,r.comment from Ratings r where r.serviceCenter.id = :id")
	public List<Ratings> getAvgRating(int id);
	
	
			

}
