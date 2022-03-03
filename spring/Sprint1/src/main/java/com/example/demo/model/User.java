package com.example.demo.model;

import javax.persistence.Entity;
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
		private String userRole;
		private String username;
		private String mobileNumber;
		private String email;
		private String password;
		
		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}
		public String getUserRole() {
			return userRole;
		}
		public void setUserRole(String userRole) {
			this.userRole = userRole;
		}
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
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
		public User(long id, String userRole, String username, String mobileNumber, String email, String password) {
			this.id = id;
			this.userRole = userRole;
			this.username = username;
			this.mobileNumber = mobileNumber;
			this.email = email;
			this.password = password;
		}
		public User() {
		}

		
		
}

/*package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
 private long id;
	
	@Column(name="name")
 private String name;
	
	@Column(name="email_id")
 private String email_id;
	
	@Column(name="phone_no")
 private long phone_no;
	
	@Column(name="address")
 private String address;
	
	@Column(name="role")
	 private String role;
 
 public User() {
	 
 }
public User(String name, String email_id, long phone_no, String address) {
	super();
	this.name = name;
	this.email_id = email_id;
	this.phone_no = phone_no;
	this.address = address;
	this.role=role;
}
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getEmail_id() {
	return email_id;
}
public void setEmail_id(String email_id) {
	this.email_id = email_id;
}
public long getPhone_no() {
	return phone_no;
}
public void setPhone_no(long phone_no) {
	this.phone_no = phone_no;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
public String getRole() {
	return role;
}
public void setRole(String role) {
		this.role=role;
}
 
}
*/