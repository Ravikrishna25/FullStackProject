package com.springjwt.controllers;

import java.util.Optional;

import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springjwt.entities.Cases;
import com.springjwt.services.auth.CaseService;



@RestController
@CrossOrigin("http://localhost:3000/")
public class CaseController {

	@Autowired
	public CaseService serv;
	
//	 @PostMapping("/case/add")
//	    public String addCaseWithPoliceId(@RequestParam String caseName,
//	                                                      @RequestParam String location) {
//		 
//		 serv.addCaseWithPoliceId( caseName, location);
//	        return "Case added successfully with police ID.";
//	    }	
	 @PostMapping("/admin/case/add")
	    public String addCaseWithPoliceId(@RequestBody CaseRequest caseRequest){
		   serv.addCaseWithPoliceId(caseRequest);
	        return "Case added successfully with police ID.";
	 }
	 @GetMapping("/admin/case/get")
		public java.util.List<Cases> get(){
			return serv.getUsers();
		}
	 
	 @PutMapping("/admin/case/put")
		public String put(@RequestBody Cases f) {
			serv.updateDetails(f);
			return "Value Updated";
		}
		
		@DeleteMapping("/admin/case/delete/{id}")
		public void delete(@PathVariable int id) {
			serv.deleteDetails(id);
		}
}
