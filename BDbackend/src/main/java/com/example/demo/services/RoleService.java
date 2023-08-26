package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Role;
import com.example.demo.repositories.RoleRepository;

@Service
public class RoleService {
	
	@Autowired
	RoleRepository rrepo;
	
	public Role getRole(int roleid) {
		return rrepo.findById(roleid).get();
	}
 public List<Role> getAllRoles() {
        return rrepo.findAll();
    }
	
 public Role createRole(Role role) {
        // Perform any necessary validation or business logic before saving
        return rrepo.save(role);
    }
public Role updateRole(int id, Role role) {
        if (rrepo.existsById(id)) {
            role.setId(id);
            return rrepo.save(role);
        }
        return null;
    }
    public void deleteRole(int id) {
        rrepo.deleteById(id);
    }

}
