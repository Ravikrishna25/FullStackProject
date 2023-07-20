package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Users;
import com.example.demo.repository.UserRepo;

@Service
public class UserService {
	@Autowired
	private UserRepo obj;
	
	public List<Users> getUsers()
	{
		return obj.findAll();
	}
	
	public Users saveDetails(Users f) {
		return obj.save(f);
	}
	
	public Users updateDetails(Users f) {
		return obj.saveAndFlush(f);
	}
	
	public void deleteDetails(int uId) {
		obj.deleteById(uId);
	}
}
