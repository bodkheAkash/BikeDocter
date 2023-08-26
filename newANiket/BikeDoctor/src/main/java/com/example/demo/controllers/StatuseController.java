package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Statuses;
import com.example.demo.services.StatusesService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StatuseController {
	
	@Autowired
	StatusesService statusser;
	
	@GetMapping("/getAllStatuses")
	public List<Statuses>getAllStatuses()
	{
		return statusser.getAllStatuses();
				
	}

}
