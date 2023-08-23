package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Packages;
import com.example.demo.repositories.PackagesRepository;

@Service
public class PackagesService {
	
	@Autowired
	PackagesRepository packrepo;
	
	public List<Packages> getAllPackages()
	{
		return packrepo.findAll();
	}
	
	public Packages getPackage(int id)
	{
		return packrepo.findById(id).get();
	}

}
