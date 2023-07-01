package com.employManagementSystem.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employManagementSystem.Entity.EmployEntity;

@Repository
public interface EmployRepository extends JpaRepository<EmployEntity, Long> {

}
