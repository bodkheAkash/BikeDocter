package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.SecurityQuestion;
import com.example.demo.services.SecurityQuestionService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SecurityQuestionController {
	@Autowired
	SecurityQuestionService sqser;

	@GetMapping("/getQuestions")
	public List<SecurityQuestion> getAll()
	{
		return sqser.getAll();
	}
}
