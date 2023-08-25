package com.example.demo.controllers;

import java.util.List;

import javax.management.relation.Role;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Roles;
import com.example.demo.services.RolesService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RoleController {
    @Autowired
    private RolesService roleService;

    @GetMapping("/admin/roles/getAllRoles")
    public List<Roles> getAllRoles() {
        return roleService.getAllRoles();
    }

    @GetMapping("/admin/roles/getRoleById/{id}")
    public Roles getRoleById(@PathVariable int id) {
        return roleService.getRoleById(id);
    }

    

    @PostMapping("/admin/roles/createRole")
    public Roles createRole(@RequestBody Roles role) {
        return roleService.createRole(role);
    }

    @PutMapping("/admin/roles/updateRole/{id}")
    public Roles updateRole(@PathVariable int id, @RequestBody Roles role) {
        return roleService.updateRole(id, role);
    }

    @DeleteMapping("/admin/roles/deleteRole/{id}")
    public void deleteRole(@PathVariable int id) {
        roleService.deleteRole(id);
    }

}
