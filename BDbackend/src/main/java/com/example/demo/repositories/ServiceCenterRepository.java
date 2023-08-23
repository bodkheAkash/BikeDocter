package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.ServiceCenter;

@Repository
public interface ServiceCenterRepository extends JpaRepository<ServiceCenter, Integer> {
	
	@Query("select s from ServiceCenter s where s.area.id=:id ")
	public List<ServiceCenter>getByAreaId(int id);

}
