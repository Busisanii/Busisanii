package com.springboot.authentication.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.springboot.authentication.model.User;
import com.springboot.authentication.repository.userRepository;

@Service
public class userServiceImpl implements userService{

	@Autowired
	private userRepository userRepo;
	@Autowired
    private PasswordEncoder passwordEncoder;
	
	public userServiceImpl(userRepository userRepo) {
		super();
		this.userRepo = userRepo;
	}

	@Override
	public String registerUser(User user) {
		// add user details in a database
        User userObj = new User(user.getUserId(),user.getUserName(), user.getUserEmail(),
        		hashPassword(user.getUserPassword()), user.getUserPhoneNo(), user.getUserType());
        if(userObj.getUserType() == null) {
        	userObj.setUserType("USER");
		}
		userRepo.save(userObj);
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
	public User getUser(int userId){
		return  userRepo.findById(userId).get(); 
	}

	@Override
	public List<User> getListUser() {
		return userRepo.findAll();
	}
	
	public User fetchByEmail(String email) {
		return userRepo.findByuserEmail(email);
	}
	
	  public String hashPassword(String plainPassword) {
	        return passwordEncoder.encode(plainPassword);
	    }
	  
	  public boolean verifyPassword(String userEmail, String plainPassword) {
	        User user = userRepo.findByuserEmail(userEmail);
	        if (user != null) {
	            return passwordEncoder.matches(plainPassword, user.getUserPassword());
	        }
	        return false;
	    }

}
