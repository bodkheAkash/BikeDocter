package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.PaymentMode;
import com.example.demo.repositories.PaymentModeRepository;

@Service
public class PaymentModeService {
	
	@Autowired
	public PaymentModeRepository paymoderepo;
	
	public List<PaymentMode> getall()
	{
		return paymoderepo.findAll();
	}
	
	public PaymentMode getById(int paymid)
	{
		return paymoderepo.findById(paymid).get();
	}

}
