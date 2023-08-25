package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.ServiceCenterService;
import com.example.demo.entities.Area;
import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.entities.SecurityQuestion;
import com.example.demo.entities.ServiceCentre;
import com.example.demo.entities.ServiceCentreRegistration;
import com.example.demo.services.AreaService;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;
import com.example.demo.services.SecurityQuestionService;


@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class ServiceCenterController {
	
	@Autowired
	ServiceCenterService sercenser;
	
	@Autowired
	RoleService roleserv;

	@Autowired
	AreaService areaserv;

	@Autowired
	LoginService loginserv;

	@Autowired
	SecurityQuestionService secquesserv;	

	@GetMapping("/getAllServiceCenter")
	public List<ServiceCentre>getAllServiceCenter()
	{
		return sercenser.getAllServiceCenter();
	}
	
	@GetMapping("/getServiceCenterByAreaId")
	public List<ServiceCentre>getByAreaId(@RequestParam("id") int id)
	{
		return sercenser.getByAreaId(id);
	}
	
	@PostMapping("/registerservicecentre")
	public ServiceCentre save(@RequestBody ServiceCentreRegistration servicecentre)
	{
		System.out.println(servicecentre);
		Role role=roleserv.getRole(2);
		System.out.println("******Role*****"+role);
		SecurityQuestion secques=secquesserv.getRole(servicecentre.getQuestion_id());
		System.out.println("***********Sec Ques*************"+secques);
		
		Area area=areaserv.getArea(servicecentre.getArea_id());
		
		Login login=new Login(servicecentre.getUsername(), servicecentre.getPassword(), servicecentre.getAnswer(), role, secques);
		Login saved=loginserv.save(login);
		
		ServiceCentre sc=new ServiceCentre(servicecentre.getName(), servicecentre.getPhone(), servicecentre.getEmail(),servicecentre.getStatus(),area, saved);
		return sercenser.save(sc);
	}



}
