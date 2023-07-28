package com.springjwt.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springjwt.entities.Reporter;


public interface UserRepo extends JpaRepository<Reporter,Integer>{

}
