package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Payment_Modes;
import com.example.demo.services.Payment_ModesService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Payment_ModesController {
	
	@Autowired
	Payment_ModesService payser;
	
	@GetMapping("/getAllPaymentModes")
	public List<Payment_Modes> getAll()
	{
		System.out.println("In modes");
		return payser.getAll();
	}

}
