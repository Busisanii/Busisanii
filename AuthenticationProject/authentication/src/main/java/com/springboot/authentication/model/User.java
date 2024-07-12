package com.springboot.authentication.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user_info")
public class User {
	
  @Id
  private int userId;
  private String userName;
  private String userEmail;
  private String userPassword;
  private String userPhoneNo;
  
  public User() {
	  
  }

public User(int userId, String userName, String userEmail, String userPassword, String userPhoneNo) {
	super();
	this.userId = userId;
	this.userName = userName;
	this.userEmail = userEmail;
	this.userPassword = userPassword;
	this.userPhoneNo = userPhoneNo;
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
  
  
}
