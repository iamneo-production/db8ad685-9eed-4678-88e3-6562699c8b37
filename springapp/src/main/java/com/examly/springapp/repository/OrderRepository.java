package com.examly.springapp.repository;

import java.util.List;

import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Order;
import com.examly.springapp.model.User;

@Repository
public interface OrderRepository 
{
	Page<Order> findByCustomerEmailOrderByDateCreatedDesc(@Param("email") String email, Pageable pageable);
}
