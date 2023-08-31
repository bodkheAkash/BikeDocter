package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Packages;

@Repository
public interface PackagesRepository extends JpaRepository<Packages, Integer> {
	
	@Query("select p.cost from Packages p where p.id=:id")
	public int getBaseCost(int id);

}
