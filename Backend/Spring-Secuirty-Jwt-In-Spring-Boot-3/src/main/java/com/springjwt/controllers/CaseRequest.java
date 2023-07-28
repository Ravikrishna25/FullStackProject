package com.springjwt.controllers;

public class CaseRequest {
    private String caseName;
    private String location;
    private String area;
    private String caseDescription;
    private String caseTime;
    private String caseDate;
    private String userName;
    private long userMobile;
    private String userEmail;
    private String caseFile;
    
    // Getter and Setter methods

    public String getCaseFile() {
		return caseFile;
	}

	public void setCaseFile(String caseFile) {
		this.caseFile = caseFile;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getCaseTime() {
		return caseTime;
	}

	public void setCaseTime(String caseTime) {
		this.caseTime = caseTime;
	}

	public String getCaseDate() {
		return caseDate;
	}

	public void setCaseDate(String caseDate) {
		this.caseDate = caseDate;
	}

	public long getUserMobile() {
		return userMobile;
	}

	public void setUserMobile(long userMobile) {
		this.userMobile = userMobile;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getCaseDescription() {
		return caseDescription;
	}

	public void setCaseDescription(String caseDescription) {
		this.caseDescription = caseDescription;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getCaseName() {
        return caseName;
    }

    public void setCaseName(String caseName) {
        this.caseName = caseName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
