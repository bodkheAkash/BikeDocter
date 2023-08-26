package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;

import jakarta.transaction.Transactional;

@Transactional
@Repository
public interface LoginRepository extends JpaRepository<Login,Integer> {

@Query("select l from Login l where username like :uid and password like :pwd")
	public Optional<Login> getLogin(String uid, String pwd);

@Modifying
@Query("UPDATE Login SET  password=:newpassword where username=:username")
public int changePassword(String newpassword,String username);
}
