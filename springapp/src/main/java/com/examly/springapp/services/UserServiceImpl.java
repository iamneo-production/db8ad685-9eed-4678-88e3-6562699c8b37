package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	List<User> list;
	public UserServiceImpl() {
		list=new ArrayList<>();
	}

    @Autowired
    public UserRepository userrepo;
    
	@Override
	public List<User> getAll(){
		return userrepo.findAll();
	}

	public User saveUser(User user) {
		userrepo.save(user);
		return user;
	}

	public String existsByemailAndpassword(String email, String password) {
			return((userrepo.existsByemailAndPassword(email, password))? "true" :"false");
		}
	
	public User getUserById(Long id) {
		User user = userrepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
		return user;
	}
	public User updateUser(Long id, User userDetails){
		
		User user = userrepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
		
		user.setUserRole(userDetails.getUserRole());
		user.setUsername(userDetails.getUsername());
	    user.setMobileNumber(userDetails.getMobileNumber());
		user.setEmail(userDetails.getEmail());
		user.setPassword(userDetails.getPassword());
		
		User updatedUser = userrepo.save(user);
		return updatedUser;
	}
	public User deleteUser(Long id){
		User user = userrepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
		
		userrepo.delete(user);
		return user;
	}
}
