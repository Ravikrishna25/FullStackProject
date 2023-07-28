package com.springjwt.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springjwt.entities.Police;
import com.springjwt.services.auth.PoliceService;

@RestController
//@RequestMapping("/api")
//@CrossOrigin("http://localhost:3000/")
public class PoliceController {
	@Autowired
	public PoliceService serv;
	
	
	@GetMapping("/admin/police/view")
	public List<Police> get(){
		return serv.getUsers();
	}
		
	@PostMapping("/admin/police/post")
	public String get(@RequestBody Police f) {
		serv.saveDetails(f);
		return "Value added";
	}
	
	@PutMapping("/admin/police/put")
	public String put(@RequestBody Police f) {
		serv.updateDetails(f);
		return "Value Updated";
	}
	
	@DeleteMapping("/admin/police/delete/{id}")
	public void delete(@PathVariable int id) {
		serv.deleteDetails(id);
	}
}
