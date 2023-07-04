package com.employManagementSystem.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;

import com.employManagementSystem.Entity.EmployEntity;
import com.employManagementSystem.Model.Employ;

public interface EmployService {
    EmployEntity createEmploy(Employ employ);

    Employ getEmployById(Long id);

    List<Employ> getAllEmployee();

    boolean deleteEmployee(Long id);

    Employ updateEmployee(Long id, Employ employ);
}