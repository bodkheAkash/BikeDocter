package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.ServiceCenter;
import com.example.demo.services.ServiceCenterService;

@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//public class ServiceCenterController {
//	
//	@Autowired
//	ServiceCenterService sercenser;
//	
//	@GetMapping("/getAllServiceCenter")
//	public List<ServiceCenter>getAllServiceCenter()
//	{
//		return sercenser.getAllServiceCenters();
//	}
//	
////	@GetMapping("/getServiceCenterByAreaId")
////	public List<ServiceCenter>getByAreaId(@RequestParam("id") int id)
////	{
////		return sercenser.getByAreaId(id);
////	}
//
//}
@RestController
//@RequestMapping("/admin/service-centers")
public class ServiceCenterController {
	@Autowired
	private ServiceCenterService serviceCenterService;

	@GetMapping("/getAllServiceCenter")
	public List<ServiceCenter> getAllServiceCenter() {
		return serviceCenterService.getAllServiceCenters();
	}

	@GetMapping("/getServiceCenterByAreaId")
	public ServiceCenter getByAreaId(@RequestParam("id") int id) {
		return serviceCenterService.getServiceCenterById(id);
	}

	@GetMapping("/admin/servicecen")
	public List<ServiceCenter> getAllServiceCenters() {
		return serviceCenterService.getAllServiceCenters();
	}

	@GetMapping("/admin/servicecen/{id}")
	public ServiceCenter getServiceCenterById(@PathVariable int id) {
		return serviceCenterService.getServiceCenterById(id);
	}

	@PostMapping("/admin/servicecen")
	public ServiceCenter createServiceCenter(@RequestBody ServiceCenter serviceCenter) {
		return serviceCenterService.createServiceCenter(serviceCenter);
	}

	@PutMapping("/admin/servicecen/{id}")
	public ServiceCenter updateServiceCenter(@PathVariable int id, @RequestBody ServiceCenter serviceCenter) {
		return serviceCenterService.updateServiceCenter(id, serviceCenter);
	}

	@DeleteMapping("/admin/servicecen/{id}")
	public void deleteServiceCenter(@PathVariable int id) {
		serviceCenterService.deleteServiceCenter(id);
	}

	
		
}
