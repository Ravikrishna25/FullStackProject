package com.springjwt.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.springjwt.entities.FeedBackRespoonse;
import com.springjwt.entities.Reporter;
//import com.springjwt.entities;

import com.springjwt.services.auth.UserService;



@RestController
@CrossOrigin("http://localhost:3000/")
public class UserController {
	@Autowired
	private UserService fam;
	
	@Autowired
	private RestTemplate restTemplate ;
	@GetMapping("/admin/view")
	public List<Reporter> get(){
		return fam.getUsers();
	}
		
	@PostMapping("/admin/user/post")
	public String get(@RequestBody Reporter f) {
		fam.saveDetails(f);
		return "Value added";
	}
	
	@PutMapping("/admin/user/put")
	public String put(@RequestBody Reporter f) {
		fam.updateDetails(f);
		return "Value Updated";
	}
	
	@DeleteMapping("/admin/user/delete/{pId}")
	public void delete(@PathVariable int pId) {
		fam.deleteDetails(pId);
	}
	
	@GetMapping("/admin/feedback/get")
	public FeedBackRespoonse[] getFeedBack()
	{
		ResponseEntity<FeedBackRespoonse[]> res = restTemplate.getForEntity(
				
				"http://localhost:8081/feedback/getFeeds" ,
				FeedBackRespoonse[].class 
				);
		return res.getBody() ;
	}
}