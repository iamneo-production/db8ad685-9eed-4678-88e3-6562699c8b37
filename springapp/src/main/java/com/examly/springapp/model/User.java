
package com.examly.springapp.model;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.HashSet;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.persistence.JoinColumn;
@Entity
	@Table(name="user", uniqueConstraints=@UniqueConstraint(columnNames="email"))
	public class User {
	    @Id
		@GeneratedValue(strategy=GenerationType.AUTO)
	    private long id;
	    /*
	    @ManyToMany(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	    @JoinTable(
				name = "users_roles",
				joinColumns = @JoinColumn(
			            name = "user_id", referencedColumnName = "id"),
				inverseJoinColumns = @JoinColumn(
					            name = "role_id", referencedColumnName = "id"))
					            */
	  //  private Collection<Role> userRole;
		private String username;
		private String userRole;
		private String mobileNumber;
		private String email;
		private String password;
		//private Set<Role> roles=new HashSet<>();
		private boolean active;
	    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	    private Set<Order> orders = new HashSet<>();
		public boolean isActive() {
			return active;
		}
		public void setActive(boolean active) {
			this.active = active;
		}
		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}

		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
		}
		/*
		public Set<Role> getRoles() {
			return roles;
		}

		public void setRoles(Set<Role> role) {
			this.roles = roles;
		}
		*/
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
		public Set<Order> getOrders() {
			return orders;
		}
		public void setOrders(Set<Order> orders) {
			this.orders = orders;
		}
	    public User(long id, String username, String userRole, String mobileNumber, String email, String password,
					boolean active, Set<Order> orders) {
				super();
				this.id = id;
				this.username = username;
				this.userRole = userRole;
				this.mobileNumber = mobileNumber;
				this.email = email;
				this.password = password;
				this.active = active;
				this.orders = orders;
			}
		public User() {	
		
}

	
		public void add(Order order) {

	        if (order != null) {

	            if (orders == null) {
	                orders = new HashSet<>();
	            }

	            orders.add(order);
	            order.setUser(this);
	        }
	    }

}
