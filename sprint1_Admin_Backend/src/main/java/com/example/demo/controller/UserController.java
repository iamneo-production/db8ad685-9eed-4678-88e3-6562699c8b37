package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

@RestController
public class UserController {
	@Autowired
	 UserService s;
	@GetMapping("/user/{id}")
	public User findUserById(@PathVariable int id )
	{
		return s.getUserById(id);
	}
	@GetMapping("/user/{email}")
	public User findUserByUsername(@PathVariable String username)
	{
		return s.getUserByUsername(username);
	}
	@GetMapping("/users")
	public List<User> findUsers()
	{
		return s.getUsers();
	}
	@PutMapping("/edit")
	public User editUser(@RequestBody User a2)
	{
		return s.editUser(a2);
	}
	@DeleteMapping("/delete/{id}")
	public Object deleteUser(@PathVariable int id)
	{
		return s.deleteUser(id);
	}
	
}

