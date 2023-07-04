package com.employManagementSystem.Services;

import java.util.List;
import java.util.Optional;

import com.employManagementSystem.Entity.EmployEntity;
import com.employManagementSystem.Model.Employ;

public interface EmployService {
    EmployEntity createEmploy(Employ employ);


    Optional<EmployEntity> getEmployById(Long id);

    List<Employ> getAllEmployee();


    boolean deleteEmployee(Long id);

}