package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.entities.PaymentMode;
import com.example.demo.entities.PaymentModeCheck;
import com.example.demo.entities.Transaction;
import com.example.demo.entities.TransactionCreate;
import com.example.demo.services.CustomerService;
import com.example.demo.services.PaymentModeService;
import com.example.demo.services.TransactionService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class TransactionController {
	@Autowired
	TransactionService transserv;
	@Autowired
	Customer cust;
	@Autowired
	CustomerService custserv;
	@Autowired
	PaymentModeService paymodeserv;
	@Autowired
	PaymentModeCheck paymodechk;
	
	@GetMapping("/getalltransactions")
	public List<Transaction> getall()
	{
		return transserv.getall();
	}
	
	@GetMapping("/gettransbycust")
	public Transaction getByTransId(@RequestParam("custid") int custid)
	{
		
		return transserv.getById(custid);
	}
	
	@PostMapping("/createtransaction")
	public Transaction register(@RequestBody TransactionCreate transcreate)
	{
		
		Customer custid=custserv.getByLoginid(transcreate.getCustomer_id());
		PaymentMode paymode=paymodeserv.getById(transcreate.getPayment_mode_id());
		Transaction transaction=new Transaction(transcreate.getAmount(),transcreate.getDate(),transcreate.getTransaction_number(),paymode,custid);
		return transserv.save(transaction);
	}
	
}
