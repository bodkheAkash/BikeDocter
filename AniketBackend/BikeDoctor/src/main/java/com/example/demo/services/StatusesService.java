
package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Statuses;
import com.example.demo.repositories.StatusesRepository;

@Service
public class StatusesService {

		@Autowired
		StatusesRepository statusrepo;
		
		public List<Statuses>getAllStatuses()
		{
			return statusrepo.findAll();
		}
		
		public Statuses getStatuses(int id)
		{
			return statusrepo.findById(id).get();
		}
}
