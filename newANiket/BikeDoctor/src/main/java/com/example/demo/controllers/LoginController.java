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

import com.example.demo.entities.BikeAdmin;
import com.example.demo.entities.Login;
import com.example.demo.entities.LoginCheck;
import com.example.demo.services.LoginService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController {

	@Autowired
	LoginService loginserv;

	@GetMapping("/admin/getallLogin")
	public List<Login> getAllBikes() {
		return loginserv.getAllBikes();
	}

//	@DeleteMapping("/admin/delete-login/{id}")
//	public ResponseEntity<String> deleteLogin(@PathVariable int id) {
//		loginserv.deleteLogin(id);
//		return ResponseEntity.ok("Login deleted successfully.");
//	}
	@DeleteMapping("/admin/login/deleteLogin/{id}")
    public void deleteRole(@PathVariable int id) {
		loginserv.deleteRole(id);
    }

	@PostMapping("/chkLogin")
	public Login chklogin(@RequestBody LoginCheck lcheck) {
		System.out.println(lcheck.getUid() + "" + lcheck.getPwd());
		return loginserv.getLogin(lcheck.getUid(), lcheck.getPwd());

	}

}
