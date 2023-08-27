package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Transactions;

@Repository
public interface TransactionsRepository extends JpaRepository<Transactions, Integer> {
	
	@Query("select t from Transactions t where t.customer.id=:cid and t.booking.id=:bid")
	public Transactions getInvoice(int cid,int bid);

}
