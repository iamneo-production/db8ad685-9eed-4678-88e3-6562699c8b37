package com.example.demo.service;

import java.util.List;
import com.example.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {
	 @Autowired
	 UserRepository repo;
	public User getUserById(int id)
	{
		return repo.findById(id).get();
	}
	public User getUserByUsername(String username)
	{
		return repo.findByUsername(username);
	}
	public List<User> getUsers()
	{
		return repo.findAll();
	}
	public User editUser(User a2)
	{
	User a3=repo.findById(a2.getId()).get();
		a3.setEmail(a2.getEmail());
		a3.setUsername(a2.getUsername());
		a3.setNumber(a2.getNumber());
		return repo.save(a3);
		
	}
	public Object deleteUser(int id)
	{
		repo.deleteById(id);
		return null;
	}

}
