package com.springjwt.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Police")
public class Police {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int policeId;
	public String policeName;
	public String policeEmail;
	public long policeMobile;
	public String policeLocation;
	
	
	
	
	public int getPoliceId() {
		return policeId;
	}
	public void setPoliceId(int policeId) {
		this.policeId = policeId;
	}
	public String getPoliceName() {
		return policeName;
	}
	public void setPoliceName(String policeName) {
		this.policeName = policeName;
	}
	public String getPoliceEmail() {
		return policeEmail;
	}
	public void setPoliceEmail(String policeEmail) {
		this.policeEmail = policeEmail;
	}
	public long getPoliceMobile() {
		return policeMobile;
	}
	public void setPoliceMobile(long policeMobile) {
		this.policeMobile = policeMobile;
	}
	public String getPoliceLocation() {
		return policeLocation;
	}
	public void setPoliceLocation(String policeLocation) {
		this.policeLocation = policeLocation;
	}
	
	
}
