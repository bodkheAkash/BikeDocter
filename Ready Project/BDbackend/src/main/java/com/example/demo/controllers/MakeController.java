package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Make;
import com.example.demo.services.MakeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MakeController {
	
	@Autowired
	MakeService makeser;
	
	@GetMapping("/getMakes")
	public List<Make>getAll()
	{
		return makeser.getAll();
	}

}
