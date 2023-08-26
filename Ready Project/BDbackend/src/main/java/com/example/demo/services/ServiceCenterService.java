package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
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
    public ServiceCentre updateServiceCenter(int id, ServiceCentre serviceCenter) {
        if (sercenrepo.existsById(id)) {
            serviceCenter.setId(id);
            return sercenrepo.save(serviceCenter);
        }
        return null;
    }
 public void deleteServiceCenter(int id) {
	 sercenrepo.deleteById(id);
    }
 public ServiceCentre createServiceCenter(ServiceCentre serviceCenter) {
     // Perform any necessary validation or business logic before saving
     return sercenrepo.save(serviceCenter);
 }
 public ServiceCentre getByLoginid(int loginid)
 {
 	ServiceCentre servicecentre;
 	Optional<ServiceCentre> cust=sercenrepo.getByLoginid(loginid);
 	try {
 		servicecentre=cust.get();
 	}
 	catch(Exception e) {
 		servicecentre=null;
 		System.out.println(e.getMessage());
 	}
 	return servicecentre;
 }
}
