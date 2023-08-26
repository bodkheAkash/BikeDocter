package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.LoginCheck;
import com.example.demo.services.LoginService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController {
@Autowired
LoginService lser;
	@PostMapping("/chkLogin")
	public Login chklogin(@RequestBody LoginCheck lcheck )
	{
		System.out.println(lcheck.getUid()+"    "+lcheck.getPwd());
		return lser.getLogin(lcheck.getUid(), lcheck.getPwd());
		
	}
	@PostMapping("/changePwd")
	public int changePassword(@RequestParam("newPwd") String newpassword,@RequestParam("username") String username )
	{
		return  lser.changePassword(newpassword,username);
	}
}
