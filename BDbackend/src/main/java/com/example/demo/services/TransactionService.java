package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Transaction;
import com.example.demo.repositories.TransactionRepository;

@Service
public class TransactionService {
	@Autowired
	public TransactionRepository transactionrepo;
	
	public List<Transaction> getall()
	{
		return transactionrepo.findAll();
	}
	
	public Transaction save(Transaction transaction)
	{
		return transactionrepo.save(transaction);
	}
	
	public Transaction getById(int custid) {
		return transactionrepo.findById(custid).get();
		
	}
}
