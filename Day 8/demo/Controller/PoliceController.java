package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Police;
import com.example.demo.Entity.Users;
import com.example.demo.Service.PoliceService;

@RestController
public class PoliceController {
	@Autowired
	public PoliceService serv;
	
	
	@GetMapping("/police/view")
	public List<Police> get(){
		return serv.getUsers();
	}
		
	@PostMapping("/police/post")
	public String get(@RequestBody Police f) {
		serv.saveDetails(f);
		return "Value added";
	}
	
	@PutMapping("/police/put")
	public String put(@RequestBody Police f) {
		serv.updateDetails(f);
		return "Value Updated";
	}
	
	@DeleteMapping("/police/delete/{pId}")
	public void delete(@PathVariable int pId) {
		serv.deleteDetails(pId);
	}
}
