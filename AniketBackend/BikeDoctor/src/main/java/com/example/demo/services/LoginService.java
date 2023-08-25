package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.BikeAdmin;
import com.example.demo.entities.Login;
import com.example.demo.repositories.LoginRepository;

@Service
public class LoginService {
	@Autowired
	LoginRepository loginrep;
	
	public List<Login> getAllBikes() {
        return loginrep.findAll();
    }
	public Login getLogin(String uid, String pwd) {
		Login l;
		Optional<Login> ol = loginrep.getLogin(uid, pwd);
		try {
			l = ol.get();

		} catch (Exception e) {
			l = null;
		}

		return l;
	}
	
	public void deleteRole(int id) {
		loginrep.deleteById(id);
    }
}
