package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.repositories.LoginRepository;

@Service
public class LoginService {
	
	@Autowired
	LoginRepository lrepo;
	
	public Login save(Login login) {
		return lrepo.save(login);
	}
	public Login getLogin(String uid, String pwd) {
		Login l;
		Optional<Login> ol = lrepo.getLogin(uid, pwd);
		try {
			l = ol.get();

		} catch (Exception e) {
			l = null;
		}

		return l;
	}
	public int changePassword(String newpassword,String username)
	{
		return lrepo.changePassword(newpassword,username);
	}
	
	public void deleteRole(int id) {
		lrepo.deleteById(id);
    }
	public List<Login> getAllBikes() {
        return lrepo.findAll();
	}
}
