package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Police;

public interface PoliceRepo extends JpaRepository<Police,Integer>{

}
