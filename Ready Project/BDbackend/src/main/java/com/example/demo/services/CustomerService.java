package com.example.demo.services;



import java.util.List;
import java.util.Optional;

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
public Customer getByLoginid(int loginid)
{
	Customer customer;
	Optional<Customer> cust=custrepo.getByLoginid(loginid);
	try {
		customer=cust.get();
	}
	catch(Exception e) {
		customer=null;
		System.out.println(e.getMessage());
	}
	return customer;
}

    public List<Customer> getAllCustomers() {
        return custrepo.findAll();
    }

public Customer getCustomerById(int id) {
        return custrepo.findById(id).orElse(null);
    }

public void deleteByLoginId(int id)
{
	custrepo.deleteByLoginId(id);
}

   



}
