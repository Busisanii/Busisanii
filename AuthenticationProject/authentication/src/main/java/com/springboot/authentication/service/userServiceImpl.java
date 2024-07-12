package com.springboot.authentication.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.authentication.model.User;
import com.springboot.authentication.repository.userRepository;

@Service
public class userServiceImpl implements userService{

	@Autowired
	userRepository userRepo;
	
	public userServiceImpl() {
	
	}

	public userServiceImpl(userRepository userRepo) {
		super();
		this.userRepo = userRepo;
	}

	@Override
	public String registerUser(User user) {
		// add user details in a database
		userRepo.save(user);
		return "Success";
	}

	@Override
	public String updateUser(User user) {
		// Update user details
		userRepo.save(user);
		return "Success";
	}

	@Override
	public String deleteUser(int userId) {
		// TODO Auto-generated method stub
		User user = getUser(userId);
		userRepo.delete(user);
		return "Success";
	}

	@Override
	public User getUser(int userId) {
		// TODO Auto-generated method stub
		return userRepo.findById(userId).get();
	}

	@Override
	public List<User> getListUser() {
		// TODO Auto-generated method stub
		return userRepo.findAll();
	}
	
	public User fetchByEmail(String email) {
		return userRepo.findByuserEmail(email);
	}

}
