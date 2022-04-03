package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
	@Table(name="user")
	public class User {
	    @Id
		@GeneratedValue(strategy=GenerationType.AUTO)
	    private long id;
		private String username;
		private String userRole;
		private String mobileNumber;
		private String email;
		private String password;
		public String getUsername() {
			return username;
		}

		public void setUsername(String username) {
			this.username = username;
		}


		public String getUserRole() {
			return userRole;
		}


		public void setUserRole(String userRole) {
			this.userRole = userRole;
		}


		public String getMobileNumber() {
			return mobileNumber;
		}


		public void setMobileNumber(String mobileNumber) {
			this.mobileNumber = mobileNumber;
		}


		public String getEmail() {
			return email;
		}


		public void setEmail(String email) {
			this.email = email;
		}


		public String getPassword() {
			return password;
		}


		public void setPassword(String password) {
			this.password = password;
		}



	
		
		public User(long id, String username, String userRole, String mobileNumber, String email, String password) {
			super();
			this.id = id;
			this.username = username;
			this.userRole = userRole;
			this.mobileNumber = mobileNumber;
			this.email = email;
			this.password = password;
		}
public User() {
}
}