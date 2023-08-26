package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.PaymentMode;
import com.example.demo.services.PaymentModeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PaymentModeController {
	@Autowired
	public PaymentModeService paymodeserv;
	
	@GetMapping("/getallpaymentmodes")
	public List<PaymentMode> getall()
	{
		return paymodeserv.getall();
	}
	
	@GetMapping("/getbymodeid")
	public PaymentMode getById(@RequestParam("id") int id)
	{
		return paymodeserv.getById(id);
	}
    
}

	

