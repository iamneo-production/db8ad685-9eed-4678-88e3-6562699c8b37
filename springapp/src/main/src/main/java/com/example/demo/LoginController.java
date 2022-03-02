package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class LoginController {
	
    @Autowired
    public UserService userservice;

    
		@PostMapping("/logins/{email}&{password}")
		 public String existsByemailAndPassword(  @PathVariable String email , @PathVariable String password) {
			return(userservice.existsByemailAndpassword(email,password));
				
		}
}