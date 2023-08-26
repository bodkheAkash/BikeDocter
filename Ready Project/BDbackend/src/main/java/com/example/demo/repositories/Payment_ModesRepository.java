package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Payment_Modes;

@Repository
public interface Payment_ModesRepository extends JpaRepository<Payment_Modes, Integer> {

}
