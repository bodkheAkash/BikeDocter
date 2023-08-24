package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.ServiceCentre;
import com.example.demo.repositories.ServiceCentreRepository;

@Service
public class ServiceCentreService {
	
	@Autowired
	public ServiceCentreRepository servcenrepo;
	public List<ServiceCentre> getall()
	{
		return servcenrepo.findAll();
	}
	
	public ServiceCentre save(ServiceCentre servicecentre)
	{
		return servcenrepo.save(servicecentre);
	}
	
	public ServiceCentre getServiceCentre(int id)
	{
		return servcenrepo.findById(id).get();
	}
}
