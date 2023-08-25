package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.services.CustomerService;

@RestController
@RequestMapping("/admin/customers")
public class CustomerAdminController {
	 @Autowired
	    private CustomerService customerService;

	    @GetMapping
	    public List<Customer> getAllCustomers() {
	        return customerService.getAllCustomers();
	    }

	    @GetMapping("/{id}")
	    public Customer getCustomerById(@PathVariable int id) {
	        return customerService.getCustomerById(id);
	    }

	    @GetMapping("/email/{email}")
	    public Customer getCustomerByEmail(@PathVariable String email) {
	        return customerService.getCustomerByEmail(email);
	    }

	    @PostMapping
	    public Customer createCustomer(@RequestBody Customer customer) {
	        return customerService.createCustomer(customer);
	    }

	    @PutMapping("/{id}")
	    public Customer updateCustomer(@PathVariable int id, @RequestBody Customer customer) {
	        return customerService.updateCustomer(id, customer);
	    }

	    @DeleteMapping("/{id}")
	    public void deleteCustomer(@PathVariable int id) {
	        customerService.deleteCustomer(id);
	    }
}
