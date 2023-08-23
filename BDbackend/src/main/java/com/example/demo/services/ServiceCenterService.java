package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Packages;
import com.example.demo.entities.ServiceCenter;
import com.example.demo.repositories.ServiceCenterRepository;

@Service
public class ServiceCenterService {

	@Autowired
	ServiceCenterRepository sercenrepo;
	
	public List<ServiceCenter> getAllServiceCenter()
	{
		return sercenrepo.findAll();
	}
	
	public List<ServiceCenter>getByAreaId(int id)
	{
		return sercenrepo.getByAreaId(id);
	}
	public ServiceCenter getServiceCenter(int id)
	{
		return sercenrepo.findById(id).get();
	}
}
