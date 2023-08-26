package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.BikeAdmin;
import com.example.demo.repositories.BiikeAdminRepo;

@Service
public class BikeAdminService {
	@Autowired
	public BiikeAdminRepo bikeadrepo;
	
	public List<BikeAdmin> getAllBikes() {
        return bikeadrepo.findAll();
    }

    public BikeAdmin getBikeById(int id) {
        return bikeadrepo.findById(id).orElse(null);
    }

    public BikeAdmin saveBike(BikeAdmin bike) {
        return bikeadrepo.save(bike);
    }

    public void deleteBike(int id) {
    	bikeadrepo.deleteById(id);
    }
}
