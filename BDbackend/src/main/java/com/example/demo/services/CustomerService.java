package com.example.demo.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.repositories.CustomerRepository;
@Service
public class CustomerService {
	
@Autowired
CustomerRepository custrepo;

public Customer getById(int id)
{
	return custrepo.findById(id).get();
}

public Customer save(Customer customer)
{
	return custrepo.save(customer);
}

}
