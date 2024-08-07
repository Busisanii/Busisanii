package com.springboot.authentication.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user_info")
public class User {
	
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int userId = 00+0;
  private String userName;
  private String userEmail;
  private String userPassword;
  private String userPhoneNo;
  private String userType;
  
  public User() {
	  
  }

public User(int userId, String userName, String userEmail, String userPassword, String userPhoneNo, String userType) {
	super();
	this.userId = userId;
	this.userName = userName;
	this.userEmail = userEmail;
	this.userPassword = userPassword;
	this.userPhoneNo = userPhoneNo;
	this.userType = userType;
}

public int getUserId() {
	return userId;
}

public void setUserId(int userId) {
	this.userId = userId;
}

public String getUserName() {
	return userName;
}

public void setUserName(String userName) {
	this.userName = userName;
}

public String getUserEmail() {
	return userEmail;
}

public void setUserEmail(String userEmail) {
	this.userEmail = userEmail;
}

public String getUserPassword() {
	return userPassword;
}

public void setUserPassword(String userPassword) {
	this.userPassword = userPassword;
}

public String getUserPhoneNo() {
	return userPhoneNo;
}

public void setUserPhoneNo(String userPhoneNo) {
	this.userPhoneNo = userPhoneNo;
}

public String getUserType() {
	return userType;
}

public void setUserType(String userType) {
	this.userType = userType;
}
  
}
