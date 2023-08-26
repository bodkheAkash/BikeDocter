package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.repositories.CustomerRepository;

//package com.example.demo.services;
//
//
//
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.example.demo.entities.Customer;
//import com.example.demo.repositories.CustomerRepository;
//@Service
//public class CustomerService {
//	
//@Autowired
//CustomerRepository custrepo;
//
//public Customer getById(int id)
//{
//	return custrepo.findById(id).get();
//}
//
//public Customer save(Customer customer)
//{
//	return custrepo.save(customer);
//}
//public Customer getByLoginid(int loginid)
//{
//	Customer customer;
//	Optional<Customer> cust=custrepo.getByLoginid(loginid);
//	try {
//		customer=cust.get();
//	}
//	catch(Exception e) {
//		customer=null;
//		System.out.println(e.getMessage());
//	}
//	return customer;
//}
//
//
//
//}

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Customer getCustomerById(int id) {
        return customerRepository.findById(id).orElse(null);
    }

    public Customer getCustomerByEmail(String email) {
        return customerRepository.findByEmail(email).orElse(null);
    }

    public Customer createCustomer(Customer customer) {
        // Perform any necessary validation or business logic before saving
        return customerRepository.save(customer);
    }

    public Customer updateCustomer(int id, Customer customer) {
        if (customerRepository.existsById(id)) {
            customer.setId(id);
            return customerRepository.save(customer);
        }
        return null;
    }

    public void deleteCustomer(int id) {
        customerRepository.deleteById(id);
    }
}




