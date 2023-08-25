package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.ServiceCenter;
import com.example.demo.repositories.ServiceCenterRepository;

//package com.example.demo.services;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.example.demo.entities.Packages;
//import com.example.demo.entities.ServiceCenter;
//import com.example.demo.repositories.ServiceCenterRepository;
//
//@Service
//public class ServiceCenterService {
//
//	@Autowired
//	ServiceCenterRepository sercenrepo;
//	
//	public List<ServiceCenter> getAllServiceCenter()
//	{
//		return sercenrepo.findAll();
//	}
//	
//	public List<ServiceCenter>getByAreaId(int id)
//	{
//		return sercenrepo.getByAreaId(id);
//	}
//	public ServiceCenter getServiceCenter(int id)
//	{
//		return sercenrepo.findById(id).get();
//	}
//}

@Service
public class ServiceCenterService {
    @Autowired
    private ServiceCenterRepository serviceCenterRepository;

    public List<ServiceCenter> getAllServiceCenters() {
        return serviceCenterRepository.findAll();
    }

    public ServiceCenter getServiceCenterById(int id) {
        return serviceCenterRepository.findById(id).orElse(null);
    }

    public ServiceCenter createServiceCenter(ServiceCenter serviceCenter) {
        // Perform any necessary validation or business logic before saving
        return serviceCenterRepository.save(serviceCenter);
    }

    public ServiceCenter updateServiceCenter(int id, ServiceCenter serviceCenter) {
        if (serviceCenterRepository.existsById(id)) {
            serviceCenter.setId(id);
            return serviceCenterRepository.save(serviceCenter);
        }
        return null;
    }
    

    public void deleteServiceCenter(int id) {
        serviceCenterRepository.deleteById(id);
    }
}
