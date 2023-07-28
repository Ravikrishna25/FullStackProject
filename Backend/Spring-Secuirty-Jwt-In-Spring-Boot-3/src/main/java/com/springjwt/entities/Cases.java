package com.springjwt.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="cases")
public class Cases {
	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	public int CaseId;
	
	public String CaseName;
	public String CaseDescription;
	public int userId;
	public String userName;
	public String CaseDate;
	public String CaseTime;
	public String CaseLocation;	
	public int PoliceId;
	public String area;
	public String CaseFile;
public String getCaseFile() {
		return CaseFile;
	}
	public void setCaseFile(String caseFile) {
		CaseFile = caseFile;
	}
public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getCaseDate() {
		return CaseDate;
	}
	public void setCaseDate(String caseDate) {
		CaseDate = caseDate;
	}
	public String getCaseTime() {
		return CaseTime;
	}
	public void setCaseTime(String caseTime) {
		CaseTime = caseTime;
	}
	public int getCaseId() {
		return CaseId;
	}
	public void setCaseId(int caseId) {
		CaseId = caseId;
	}
	public String getCaseName() {
		return CaseName;
	}
	public void setCaseName(String caseName) {
		CaseName = caseName;
	}
	public String getCaseDescription() {
		return CaseDescription;
	}
	public void setCaseDescription(String caseDescription) {
		CaseDescription = caseDescription;
	}
	public String getCaseLocation() {
		return CaseLocation;
	}
	public void setCaseLocation(String caseLocation) {
		CaseLocation = caseLocation;
	}
	public int getPoliceId() {
		return PoliceId;
	}
	public void setPoliceId(int policeId) {
		PoliceId = policeId;
	}


}
