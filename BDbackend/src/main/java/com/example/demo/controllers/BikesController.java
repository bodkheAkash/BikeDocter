package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Bikes;
import com.example.demo.services.BikesService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class BikesController {

		@Autowired
		BikesService bikeser;
		
		@GetMapping("/getBikesByMakeId")
		public List<Bikes>getByMakeId(@RequestParam("id") int id)
		{
			return bikeser.getByMakeId(id);
		}
}
