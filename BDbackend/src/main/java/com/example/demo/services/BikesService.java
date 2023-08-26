package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Area;
import com.example.demo.entities.Bikes;
import com.example.demo.entities.Make;
import com.example.demo.repositories.BikesRepository;

@Service
public class BikesService {
	
	@Autowired
	BikesRepository bikerepo;
	
	@Autowired
	MakeService mservice;
	
	public List<Bikes>getByMakeId(int id)
	{
		Make m = mservice.getById(id);
		return bikerepo.getByMakeId(m);
	}
	
	public Bikes getBike(int id)
	{
		return bikerepo.findById(id).get();
	}
	
	public List<Bikes> getAllBikes() 
    {
        return bikerepo.findAll();
    }
    
	public void deleteBike(int id) {
    	bikerepo.deleteById(id);
    }

}
