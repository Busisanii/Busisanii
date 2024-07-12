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
@RequestMapping
public class userController {

	@Autowired
	userServiceImpl userService;

	public userController(userServiceImpl userService) {
		super();
		this.userService = userService;
	}
	
	@PostMapping("/registration")
	public String registerUser(@RequestBody User user) throws Exception {
		String tempEmail = user.getUserEmail();
		if(tempEmail != null && !"".equals(tempEmail)) {
			User userObj = userService.fetchByEmail(tempEmail);
			if(userObj != null) {
				throw new Exception("User with email: " + userObj.getUserEmail() + " already exist!..");
			}
		}
		userService.registerUser(user);
		return "Success";
	}
	
	//Can update the user's details by Id
	@PutMapping("/user/{userId}")
	public String updateUser(@RequestBody User user) {
		userService.updateUser(user);
		return "Success";
	}
	
	//Can get a user by Id
	@GetMapping("/user/{userId}")
	public User getUser(@PathVariable(value ="userId") int userId){
		return userService.getUser(userId);
	}
	
	//Can get all the user's
	@GetMapping("/user")
	public List<User> getAllUser(){
		return userService.getListUser();
	}
	
	@DeleteMapping("/user/{id}")
	public String deleteUser(@PathVariable(value ="userId") int userId) {
		userService.deleteUser(userId);
		return "Success";
	}
}
