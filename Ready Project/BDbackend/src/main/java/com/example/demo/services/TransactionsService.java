package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Transactions;
import com.example.demo.repositories.TransactionsRepository;

@Service
public class TransactionsService {

	@Autowired
	TransactionsRepository tranrepo;
	
	
	public List<Transactions>getAllTransaction()
	{
		return tranrepo.findAll();
	}
	
	public Transactions save(Transactions tarns)
	{
		return tranrepo.save(tarns);
	}
	
	public Transactions getInvoice(int cid,int bid)
	{
		return tranrepo.getInvoice(cid, bid);
	}
}
