package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Payment_Modes;
import com.example.demo.repositories.Payment_ModesRepository;

@Service
public class Payment_ModesService {
	
	@Autowired
	Payment_ModesRepository payrepo;
	
	public List<Payment_Modes>getAll()
	{
		return payrepo.findAll();
	}
	
	public Payment_Modes getById(int id)
	{
		return payrepo.findById(id).get();
	}

}
