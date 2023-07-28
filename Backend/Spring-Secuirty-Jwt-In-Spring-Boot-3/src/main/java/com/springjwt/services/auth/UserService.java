package com.springjwt.services.auth;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springjwt.entities.Reporter;
import com.springjwt.repositories.UserRepo;


@Service
public class UserService {
	@Autowired
	private UserRepo obj;
	
	public List<Reporter> getUsers()
	{
		return obj.findAll();
	}
	
	public Reporter saveDetails(Reporter f) {
		return obj.save(f);
	}
	
	public Reporter updateDetails(Reporter f) {
		return obj.saveAndFlush(f);
	}
	
	public void deleteDetails(int uId) {
		obj.deleteById(uId);
	}
}
