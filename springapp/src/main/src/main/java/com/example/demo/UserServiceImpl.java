package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
	
	List<UserModel> list;
	public UserServiceImpl() {
		list=new ArrayList<>();
	}

    @Autowired
    public UserRepo userrepo;
    
	@Override
	public List<UserModel> getAll(){
		return userrepo.findAll();
	}

	public UserModel saveUser(UserModel user) {
		userrepo.save(user);
		return user;
	}
	
	public String existsByemailAndpassword(String email, String password) {
			return((userrepo.existsByemailAndPassword(email, password))? "true" :"false");
		}
		
}
