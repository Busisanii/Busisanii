package com.springboot.authentication.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.springboot.authentication.model.User;
import com.springboot.authentication.repository.userRepository;

@Service
public class userServiceImpl implements userService, UserDetailsService{

	@Autowired
	private userRepository userRepo;
	
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
		User user = userRepo.findById(userId).get();
		userRepo.delete(user);
		return "Success";
	}

	@Override
	public User getUser(int userId) {
		return userRepo.findById(userId).get();
	}

	@Override
	public List<User> getListUser() {
		return userRepo.findAll();
	}
	
	public User fetchByEmail(String email) {
		return userRepo.findByuserEmail(email);
	}

	@Override
	public UserDetails loadUserByUsername(String userEmail) throws UsernameNotFoundException {
		  User user = userRepo.findByuserEmail(userEmail);
		        return new org.springframework.security.core.userdetails.User(
		            user.getUserEmail(),
		            user.getUserPassword(),
		            new ArrayList<>()
		        );
	}

}
