package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.Bikes;
import com.example.demo.entities.Make;

@Repository
public interface BikesRepository extends JpaRepository<Bikes, Integer> {
	
	@Query("select b from Bikes b where b.make=:m")
	public List<Bikes>getByMakeId(Make m);

}
