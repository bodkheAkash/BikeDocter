package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Make;
import com.example.demo.repositories.MakeRepository;

@Service
public class MakeService {

	@Autowired
	MakeRepository makerepo;
	
	public List<Make>getAll()
	{
		return makerepo.findAll();
	}
	
	public Make getById(int id)
	{
		return makerepo.findById(id).get();
	}
}
