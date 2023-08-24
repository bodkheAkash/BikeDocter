package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.demo.entities.SecurityQuestion;
import com.example.demo.repositories.SecurityQuestionRepository;

@Service
public class SecurityQuestionService 
{
	@Autowired
	public SecurityQuestionRepository sqrepo;
	
	
	@GetMapping("/getQuestions")
	public List<SecurityQuestion> getAll()
	{
		return sqrepo.findAll();
	}
	
	
	public SecurityQuestion getsecques(int quesid)
	{
		return sqrepo.findById(quesid).get();
		
	}
}
