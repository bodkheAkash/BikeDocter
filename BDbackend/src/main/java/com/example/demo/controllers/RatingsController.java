package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.entities.RatingDummy;
import com.example.demo.entities.Ratings;
import com.example.demo.entities.ServiceCentre;
import com.example.demo.services.CustomerService;
import com.example.demo.services.RatingsService;
import com.example.demo.services.ServiceCenterService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RatingsController {
	
	@Autowired
	RatingsService ratingser;
	
	@Autowired
	CustomerService custser;
	
	@Autowired
	ServiceCenterService sercenser;
	
	@GetMapping("/getAllRatings")
	public List<Ratings>getAllRatings()
	{
		return ratingser.getAllRatings();
	}
	
	@PostMapping("/setRating")
	public Ratings setRating(@RequestBody RatingDummy rating)
	{
		Customer customer=custser.getById(rating.getCustomer_id());
		ServiceCentre servicecenter=sercenser.getServiceCenter(rating.getServ_cen_id());
		
		Ratings ratings=new Ratings(rating.getRating(),rating.getComment(),customer,servicecenter);
		
		return ratingser.setRating(ratings);
	}
	
	@GetMapping("getAvgRating")
	public float getAvgRating(@RequestParam("id") int id)
	{
		return ratingser.getAvgRating(id);
	}

}
