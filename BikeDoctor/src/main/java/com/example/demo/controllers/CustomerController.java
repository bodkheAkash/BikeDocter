package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Area;
import com.example.demo.entities.Customer;
import com.example.demo.entities.CustomerRegistration;
import com.example.demo.entities.Role;
import com.example.demo.entities.SecurityQuestion;
import com.example.demo.entities.ServiceCentre;
import com.example.demo.services.AreaService;
import com.example.demo.services.CustomerService;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;
import com.example.demo.services.SecurityQuestionService;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CustomerController {
	
	@Autowired
	CustomerService custserv;
	@Autowired
	RoleService roleser;
	@Autowired
	AreaService areaser;
	@Autowired
	LoginService loginser;
	@Autowired
	SecurityQuestionService sqser;
	
	
	@GetMapping("/getallcustomers")
	public List<Customer> getall()
	{
		return custserv.getall();
	}
	
	@GetMapping("/getCustomerdetails")
	public Customer getByLoginid(@RequestParam("loginid") int loginid)
	{
		return custserv.getByLoginid(loginid);
	}
	
	@PostMapping("/registercustomer")
	public Customer register(@RequestBody CustomerRegistration custreg)
	{
		Role role=roleser.getRoles(1);
		SecurityQuestion sq=sqser.getsecques((int)custreg.getQuestionid());
		
		Login login=new Login(custreg.getUserid(),custreg.getPassword(),custreg.getAnswer(),role,sq);
		Login saved=loginser.save(login);
		Area area=areaser.getArea(custreg.getAreaid());
		
		Customer customer=new Customer(custreg.getFname(),custreg.getLname(),custreg.getContactno(),custreg.getEmailid(),area,saved);
		
		return custserv.save(customer);
		
		
		
	}
}
