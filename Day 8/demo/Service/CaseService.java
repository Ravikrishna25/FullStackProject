package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Controller.CaseRequest;
import com.example.demo.repository.CasesRepo;

import jakarta.transaction.Transactional;

@Service
public class CaseService {
	
	@Autowired
	public CasesRepo repo;
	
//	public void addCaseWithPoliceId( String caseName, String location) {
//        repo.insertCaseWithPoliceId(caseName, location);
//    }
	 @Transactional
	  public void addCaseWithPoliceId(CaseRequest caseRequest) {
	        repo.insertCaseWithPoliceId(
	        		caseRequest.getCaseDate(),
	        		caseRequest.getCaseDescription(),
	        		caseRequest.getLocation(),
	        		caseRequest.getCaseName(),
	        		caseRequest.getCaseTime() ,
	        		caseRequest. getArea(),
	        		caseRequest.getUserName(),
	        		caseRequest.getUserMobile(),
	        		caseRequest.getUserEmail());
	    }

}
