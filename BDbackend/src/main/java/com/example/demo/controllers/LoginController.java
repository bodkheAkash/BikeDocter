package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.LoginCheck;
import com.example.demo.entities.PassBasedEnc;
import com.example.demo.entities.SaltValue;
import com.example.demo.services.CustomerService;
import com.example.demo.services.LoginService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController {
	@Autowired
	LoginService lser;
	
	@Autowired
	CustomerService custser;
	
	@Autowired
	SaltValue saltValue;

	@PostMapping("/chkLogin")
	public Login chklogin(@RequestBody LoginCheck lcheck){
		//System.out.println(lcheck.getUid() + "    " + lcheck.getPwd());
		String encrypted=PassBasedEnc.generateSecurePassword(lcheck.getPwd(),saltValue.getSalt());
		return lser.getLogin(lcheck.getUid(),lcheck.getPwd());
		//lcheck.getPwd()
		}

	

	@PostMapping("/changePwd")
	public int changePassword(@RequestParam("newPwd") String newpassword, @RequestParam("username") String username) {
		String encrypted=PassBasedEnc.generateSecurePassword(newpassword,saltValue.getSalt());
		return lser.changePassword(encrypted, username);
	}

	@GetMapping("/admin/getallLogin")
	public List<Login> getAllBikes() {
		return lser.getAllBikes();
	}

	@DeleteMapping("/admin/login/deleteLogin/{id}")
	public void deleteRole(@PathVariable int id) { // Change method name to deleteLogin
		custser.deleteByLoginId(id);
	  lser.deleteRole(id);
	  
	}
}
