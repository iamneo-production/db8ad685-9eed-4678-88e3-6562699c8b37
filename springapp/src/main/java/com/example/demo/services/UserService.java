package com.example.demo.services;

import java.util.List;

import com.example.demo.model.User;

public interface UserService {
	public List<User> getAll();

    public User saveUser(User user);
    public String existsByemailAndpassword(String email, String password);
}