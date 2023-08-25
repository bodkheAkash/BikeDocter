package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Role;
import com.example.demo.services.RoleService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RoleController {
@Autowired
RoleService rser;

@GetMapping("getRoleById")
 public Role getRole(@RequestParam("id") int id)
 {
	 return rser.getRole(id);
 }
}
