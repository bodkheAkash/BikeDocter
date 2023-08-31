package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Bookings;
import com.example.demo.entities.Customer;
import com.example.demo.entities.PaymentDummy;
import com.example.demo.entities.Payment_Modes;
import com.example.demo.entities.Transactions;
import com.example.demo.repositories.Payment_ModesRepository;
import com.example.demo.services.BookingsService;
import com.example.demo.services.CustomerService;
import com.example.demo.services.Payment_ModesService;
import com.example.demo.services.TransactionsService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TransactionsController {
	
	@Autowired
	TransactionsService transer;
	
	@Autowired
	CustomerService custser;
	
	@Autowired
	Payment_ModesService payrepo;
	
	@Autowired
	BookingsService bookser;
	
	@GetMapping("/getAllTransaction")
	public List<Transactions>getAllTransaction()
	{
		return transer.getAllTransaction();
	}
	
	@PostMapping("/saveTransaction")
	public Transactions save(@RequestBody PaymentDummy payment)
	{
		Customer customer=custser.getById(payment.getCustomer_id());
		Payment_Modes pay=payrepo.getById(payment.getPayment_mode_id());
		Bookings book=bookser.getByBookingId(payment.getBookingid());
		
		Transactions trans=new Transactions(payment.getAmount(),payment.getDate(),customer,pay,book);
		return transer.save(trans);
		
		
	}
	
	@GetMapping("/getInvoice")
	public Transactions getInvoice(@RequestParam("cid") int cid,@RequestParam("bid") int bid)
	{
		return transer.getInvoice(cid, bid);
	}

}
