package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.ServiceCenter;
import com.example.demo.services.ServiceCenterService;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class ServiceCenterController {
	
	@Autowired
	ServiceCenterService sercenser;
	
	@GetMapping("/getAllServiceCenter")
	public List<ServiceCenter>getAllServiceCenter()
	{
		return sercenser.getAllServiceCenter();
	}
	
	@GetMapping("/getServiceCenterByAreaId")
	public List<ServiceCenter>getByAreaId(@RequestParam("id") int id)
	{
		return sercenser.getByAreaId(id);
	}

}
