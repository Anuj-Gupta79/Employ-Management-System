package com.employManagementSystem.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employManagementSystem.Entity.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long>{

    UserEntity findByEmailId(String emailId);
} 
