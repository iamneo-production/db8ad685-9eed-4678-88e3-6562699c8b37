package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class SignupController {

	@Autowired
    public UserService userservice;

    @GetMapping("/User")
	public List<UserModel> getAll(){
		return userservice.getAll();
	}


	@PostMapping("/signup")
	public UserModel saveUser(@RequestBody UserModel user) {
		return userservice.saveUser(user);
	}
}
