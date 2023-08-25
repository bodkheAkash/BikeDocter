//package com.example.demo.controllers;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.demo.entities.ServiceCenter;
//import com.example.demo.services.ServiceCenterService;
//
//@RestController
//@RequestMapping("/admin/service-centers")
//public class ServiceCenterAdmin {
//	  @Autowired
//	    private ServiceCenterService serviceCenterService;
//
//	    @GetMapping
//	    public List<ServiceCenter> getAllServiceCenters() {
//	        return serviceCenterService.getAllServiceCenters();
//	    }
//
//	    @GetMapping("/{id}")
//	    public ServiceCenter getServiceCenterById(@PathVariable int id) {
//	        return serviceCenterService.getServiceCenterById(id);
//	    }
//
//	    @PostMapping
//	    public ServiceCenter createServiceCenter(@RequestBody ServiceCenter serviceCenter) {
//	        return serviceCenterService.createServiceCenter(serviceCenter);
//	    }
//
//	    @PutMapping("/{id}")
//	    public ServiceCenter updateServiceCenter(@PathVariable int id, @RequestBody ServiceCenter serviceCenter) {
//	        return serviceCenterService.updateServiceCenter(id, serviceCenter);
//	    }
//
//	    @DeleteMapping("/{id}")
//	    public void deleteServiceCenter(@PathVariable int id) {
//	        serviceCenterService.deleteServiceCenter(id);
//	    }
//	    
//}
