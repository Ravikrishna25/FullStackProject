package com.springjwt.services.auth;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springjwt.controllers.CaseRequest;
import com.springjwt.entities.Cases;
import com.springjwt.repositories.CasesRepo;

import jakarta.transaction.Transactional;

@Service
public class CaseService {
	
	@Autowired
	public CasesRepo repo;
	
//	public void addCaseWithPoliceId( String caseName, String location) {
//        repo.insertCaseWithPoliceId(caseName, location);
//    }
	
	public List<Cases> getUsers()
	{
		return repo.findAll();
	}
	
	 @Transactional
	  public void addCaseWithPoliceId(CaseRequest caseRequest) {
	        repo.insertCaseWithPoliceId(
	        		caseRequest.getCaseDate(),
	        		caseRequest.getCaseDescription(),
	        		caseRequest.getCaseFile(),
	        		caseRequest.getLocation(),
	        		caseRequest.getCaseName(),
	        		caseRequest.getCaseTime() ,
	        		caseRequest. getArea(),
	        		caseRequest.getUserName(),
	        		caseRequest.getUserMobile(),
	        		caseRequest.getUserEmail());
	    }
	 
	 
	 public Cases updateDetails(Cases f) {
			return repo.save(f);
		}
		
		public void deleteDetails(int uId) {
			repo.deleteById(uId);
		}

}
