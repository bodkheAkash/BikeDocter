package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;
import com.example.demo.entities.Role;

@Repository
public interface RolesRepository extends JpaRepository<Role,Integer> {
	@Query("select r from Role r where id= :roleid")
	public Optional<Role> getRoles(int roleid);
}
