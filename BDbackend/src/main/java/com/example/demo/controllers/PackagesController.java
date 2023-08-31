package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Packages;
import com.example.demo.services.PackagesService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PackagesController {
	
	@Autowired
	PackagesService packser;
	
	@GetMapping("/getAllPackages")
	public List<Packages>getAllPackages()
	{
		return  packser.getAllPackages();
	}
	
	@GetMapping("/getBaseCost")
	public int getBaseCost(@RequestParam("id") int id)
	{
		return  packser.getBaseCost(id);
	}

}
