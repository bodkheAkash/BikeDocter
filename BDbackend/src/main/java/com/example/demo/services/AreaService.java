package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Area;
import com.example.demo.repositories.AreaRepository;
@Service
public class AreaService {

	@Autowired
	AreaRepository arepo;
	
	public List<Area>getAll()
	{
		return arepo.findAll();
	}
	
	public List<Area> getByCityId(int id)
	{
		return arepo.getByCityId(id);
	}
	
	public Area getArea(int areaid)
	{
		return arepo.findById(areaid).get();
	}
}
