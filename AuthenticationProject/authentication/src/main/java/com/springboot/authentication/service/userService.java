package com.springboot.authentication.service;

import java.util.List;

import com.springboot.authentication.model.User;

public interface userService {

	public String registerUser(User user);
	public String updateUser(User user);
	public String deleteUser(int userId);
	public User getUser(int userId);
	public List<User> getListUser();
}
