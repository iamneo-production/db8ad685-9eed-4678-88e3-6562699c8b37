package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
	
    @Autowired
    public UserRepo userrepo;
    
	public String existsByemailAndpassword(String email, String password) {
		return((userrepo.existsByemailAndPassword(email, password)) ? "true" :"false");
	}
		
}
