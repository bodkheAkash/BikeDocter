package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.BikeAdmin;
import com.example.demo.services.BikeAdminService;

@RestController
//@RequestMapping("/admin/bikes")
public class BikeController {

	@Autowired
	private BikeAdminService bikeService;

	@GetMapping("/getBikesByMakeId")
	public BikeAdmin getByMakeId(@RequestParam("id") int id)
	{
		return bikeService.getBikeById(id);
	}
	
	@GetMapping("/admin/bikes")
	public List<BikeAdmin> getAllBikes() {
		return bikeService.getAllBikes();
	}

	@GetMapping("/admin/bikes/{id}")
	public BikeAdmin getBikeById(@PathVariable int id) {
		return bikeService.getBikeById(id);
	}

	@PostMapping("/admin/bikes")
	public BikeAdmin saveBike(@RequestBody BikeAdmin bike) {
		return bikeService.saveBike(bike);
	}

	@PutMapping("/admin/bikes/{id}")
	public BikeAdmin updateBike(@PathVariable int id, @RequestBody BikeAdmin bike) {
		if (bikeService.getBikeById(id) != null) {
			bike.setId(id);
			return bikeService.saveBike(bike);
		}
		return null;
	}

	@DeleteMapping("/admin/bikes/{id}")
	public void deleteBike(@PathVariable int id) {
		bikeService.deleteBike(id);
	}
}
