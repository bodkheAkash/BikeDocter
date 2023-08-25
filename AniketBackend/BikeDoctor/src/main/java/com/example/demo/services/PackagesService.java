package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Packages;
import com.example.demo.repositories.PackagesRepository;

@Service
public class PackagesService {
    @Autowired
    private PackagesRepository servicePackageRepository;

    public List<Packages> getAllServicePackages() {
        return servicePackageRepository.findAll();
    }

    public Packages getServicePackageById(int id) {
        return servicePackageRepository.findById(id).orElse(null);
    }

    public Packages createServicePackage(Packages servicePackage) {
        // Perform any necessary validation or business logic before saving
        return servicePackageRepository.save(servicePackage);
    }

    public Packages updateServicePackage(int id, Packages servicePackage) {
        if (servicePackageRepository.existsById(id)) {
            servicePackage.setId(id);
            return servicePackageRepository.save(servicePackage);
        }
        return null;
    }

    public void deleteServicePackage(int id) {
        servicePackageRepository.deleteById(id);
    }
}

