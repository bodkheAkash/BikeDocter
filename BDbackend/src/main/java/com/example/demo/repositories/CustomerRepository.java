package com.example.demo.repositories;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Customer;

import jakarta.transaction.Transactional;

@Transactional
@Repository
public interface CustomerRepository extends JpaRepository<Customer,Integer> {
	@Query(value="select * from customers where login_id=:loginid",nativeQuery = true)
	public Optional<Customer> getByLoginid(int loginid);
	
	@Modifying
	@Query(value="delete from customers where login_id=:loginid",nativeQuery = true)
	public void deleteByLoginId(int loginid );

}
