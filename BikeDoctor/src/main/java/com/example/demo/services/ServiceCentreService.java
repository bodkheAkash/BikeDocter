package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
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
		ServiceCentre servicecentre;
		Optional<ServiceCentre> servcen=servcenrepo.getByLoginid(id);
		try {
			servicecentre=servcen.get();
		}
		catch(Exception e) {
			servicecentre=null;
			System.out.println(e.getMessage());
		}
		return servicecentre;
	}
}
