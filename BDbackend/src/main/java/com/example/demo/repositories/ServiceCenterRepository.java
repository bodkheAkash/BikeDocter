package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.ServiceCentre;



@Repository
public interface ServiceCenterRepository extends JpaRepository<ServiceCentre, Integer> {
	
	@Query("select s from ServiceCentre s where s.area.id=:id ")
	public List<ServiceCentre>getByAreaId(int id);

}
