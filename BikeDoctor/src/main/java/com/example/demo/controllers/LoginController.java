package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.LoginCheck;
import com.example.demo.services.LoginService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class LoginController {
	@Autowired
	LoginService loginserv;
	
	@PostMapping("/chkLogin")
	public Login chklogin(@RequestBody LoginCheck lcheck )
	{
		System.out.println("*******Userid************"+lcheck.getUid()+"\t******Password*********"+lcheck.getPwd());
		return loginserv.getLogin(lcheck.getUid(), lcheck.getPwd());
		
	}
	
}
