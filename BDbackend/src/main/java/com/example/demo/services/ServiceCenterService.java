package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Packages;
import com.example.demo.entities.ServiceCentre;
import com.example.demo.repositories.ServiceCenterRepository;

@Service
public class ServiceCenterService {

	@Autowired
	ServiceCenterRepository sercenrepo;
	
	public List<ServiceCentre> getAllServiceCenter()
	{
		return sercenrepo.findAll();
	}
	
	public List<ServiceCentre>getByAreaId(int id)
	{
		return sercenrepo.getByAreaId(id);
	}
	public ServiceCentre getServiceCenter(int id)
	{
		return sercenrepo.findById(id).get();
	}
	public ServiceCentre save(ServiceCentre servicecentre)
	{
		return sercenrepo.save(servicecentre);
	}
}
