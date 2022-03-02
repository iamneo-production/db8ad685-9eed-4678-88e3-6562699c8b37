package com.example.demo;

import java.util.List;

public interface UserService {
	public List<UserModel> getAll();

    public UserModel saveUser(UserModel user);
    public String existsByemailAndpassword(String email, String password);
}
