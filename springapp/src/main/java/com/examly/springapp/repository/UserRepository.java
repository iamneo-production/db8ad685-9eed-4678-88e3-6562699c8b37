package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.User;

import org.springframework.data.repository.query.Param;
@Repository
public interface UserRepository extends JpaRepository<User, Long>{
boolean existsByemailAndPassword(String email, String password);
}
