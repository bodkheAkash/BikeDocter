package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Role;
import com.example.demo.repositories.RolesRepository;

@Service
public class RoleService {
	@Autowired
	RolesRepository rrepo;

	public Role getRoles(int roleid) {
		return rrepo.findById(roleid).get();
	}
}
