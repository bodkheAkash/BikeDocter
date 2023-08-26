package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.RatingDummy;
import com.example.demo.entities.Ratings;
import com.example.demo.repositories.RatingsRepository;

@Service
public class RatingsService {
	
	@Autowired
	RatingsRepository ratingrepo;
	
	public List<Ratings>getAllRatings()
	{
		return ratingrepo.findAll();
	}
	
	public Ratings setRating(Ratings rating)
	{
		return ratingrepo.save(rating);
	}
	
	public float getAvgRating(int id)
	{
		return ratingrepo.getAvgRating(id);
	}
}
