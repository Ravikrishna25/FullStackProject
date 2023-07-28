package com.springjwt.services.auth;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springjwt.entities.Police;
import com.springjwt.repositories.PoliceRepo;


@Service
public class PoliceService {
	@Autowired
	public PoliceRepo repo;
	
	public List<Police> getUsers()
	{
		return repo.findAll();
	}
	
	public Police saveDetails(Police f) {
		return repo.save(f);
	}
	
	public Police updateDetails(Police f) {
		return repo.saveAndFlush(f);
	}
	
	public void deleteDetails(int uId) {
		repo.deleteById(uId);
	}
}
