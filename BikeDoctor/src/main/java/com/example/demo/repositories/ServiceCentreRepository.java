package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Customer;
import com.example.demo.entities.ServiceCentre;

@Repository
public interface ServiceCentreRepository extends JpaRepository<ServiceCentre, Integer> {
	@Query(value="select * from service_centre where login_id=:loginid",nativeQuery = true)
	public Optional<ServiceCentre> getByLoginid(int loginid);

}
