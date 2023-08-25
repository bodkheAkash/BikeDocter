package com.example.demo.services;

import java.util.List;

import javax.management.relation.Role;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Roles;
import com.example.demo.repositories.RolesRepository;

@Service
public class RolesService {
    @Autowired
    private RolesRepository roleRepository;

    public List<Roles> getAllRoles() {
        return roleRepository.findAll();
    }

    public Roles getRoleById(int id) {
        return roleRepository.findById(id).orElse(null);
    }

    
    public Roles createRole(Roles role) {
        // Perform any necessary validation or business logic before saving
        return roleRepository.save(role);
    }

    public Roles updateRole(int id, Roles role) {
        if (roleRepository.existsById(id)) {
            role.setId(id);
            return roleRepository.save(role);
        }
        return null;
    }

    public void deleteRole(int id) {
        roleRepository.deleteById(id);
    }
}
