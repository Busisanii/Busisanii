package com.springboot.authentication.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.authentication.model.User;

public interface userRepository extends JpaRepository<User, Integer>{
	public User findByuserEmail(String email);
}
