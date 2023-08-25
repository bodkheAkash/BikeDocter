package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Packages;
import com.example.demo.services.PackagesService;

@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//public class PackagesController {
//	
//	@Autowired
//	PackagesService packser;
//	
//	@GetMapping("/getAllPackages")
//	public List<Packages>getAllPackages()
//	{
//		return  packser.getAllServicePackages();
//	}
//
//}

@RestController
//@RequestMapping("/admin/packages")
public class PackagesController {
    @Autowired
    private PackagesService servicePackageService;
    
    @GetMapping("/getAllPackages")
	public List<Packages>getAllPackages()
	{
		return  servicePackageService.getAllServicePackages();
	}

    @GetMapping("/admin/packages")
    public List<Packages> getAllServicePackages() {
        return servicePackageService.getAllServicePackages();
    }

    @GetMapping("/admin/packages/{id}")
    public Packages getServicePackageById(@PathVariable int id) {
        return servicePackageService.getServicePackageById(id);
    }

    @PostMapping("/admin/packages")
    public Packages createServicePackage(@RequestBody Packages servicePackage) {
        return servicePackageService.createServicePackage(servicePackage);
    }

    @PutMapping("/admin/packages/{id}/update")
    public Packages updateServicePackage(@PathVariable int id, @RequestBody Packages servicePackage) {
        return servicePackageService.updateServicePackage(id, servicePackage);
    }

    @DeleteMapping("/admin/packages/{id}/delete")
    public void deleteServicePackage(@PathVariable int id) {
        servicePackageService.deleteServicePackage(id);
    }
}

