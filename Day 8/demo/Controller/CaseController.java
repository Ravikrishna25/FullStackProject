package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Cases;
import com.example.demo.Service.CaseService;

@RestController
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
	 @PostMapping("/case/add")
	    public String addCaseWithPoliceId(@RequestBody CaseRequest caseRequest){
		   serv.addCaseWithPoliceId(caseRequest);
	        return "Case added successfully with police ID.";
	    }
}
