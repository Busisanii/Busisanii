package com.springboot.authentication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.authentication.model.User;
import com.springboot.authentication.service.userServiceImpl;

@RestController
@RequestMapping("/user")
public class userController {

	@Autowired
	userServiceImpl userService;

	public userController(userServiceImpl userService) {
		super();
		this.userService = userService;
	}
	
	@PostMapping("/registration")
	public void registerUser(@RequestBody User user) throws Exception {
		String tempEmail = user.getUserEmail();
		if(tempEmail != null && !"".equals(tempEmail)) {
			User userObj = userService.fetchByEmail(tempEmail);
			if(userObj != null) {
				throw new Exception("User with email: " + userObj.getUserEmail() + " already exist!..");
			}
		}
		userService.registerUser(user);
		
	}
	
	//Can update the user's details by Id
	@PutMapping("/UserDetails/{userId}")
	public String updateUser(@RequestBody User user) {
		userService.updateUser(user);
		return "Success";
	}
	
	//Can get a user by Id
	@GetMapping("/UserDetails/{userId}")
	public User getUser(@PathVariable int userId){
		return userService.getUser(userId);
	}
	
	//Can get all the user's
	@GetMapping("/UserDetails")
	public List<User> getAllUser(){
		return userService.getListUser();
	}
	
	@DeleteMapping("/UserDetails/{userId}")
	public String deleteUser(@PathVariable int userId) {
		userService.deleteUser(userId);
		return "Success";
	}
}
