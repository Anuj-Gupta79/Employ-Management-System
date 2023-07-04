package com.employManagementSystem.Services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employManagementSystem.Entity.EmployEntity;
import com.employManagementSystem.Model.Employ;
import com.employManagementSystem.Repository.EmployRepository;

@Service
public class EmployImplementation implements EmployService {

    @Autowired
    private EmployRepository employRepository;

    @Override
    public EmployEntity createEmploy(Employ employ) {
        EmployEntity employEntity = new EmployEntity();

        BeanUtils.copyProperties(employ, employEntity);
        employRepository.save(employEntity);

        return employEntity;

    }

    @Override
    public Employ getEmployById(Long id) {
        EmployEntity employEntity = employRepository.findById(id).get();
        Employ employ = new Employ();
        BeanUtils.copyProperties(employEntity, employ);
        return employ;
    }

    @Override
    public List<Employ> getAllEmployee() {
        List<EmployEntity> employEntities = employRepository.findAll();

        List<Employ> employees = employEntities
                .stream()
                .map(emp -> new Employ(
                        emp.getId(),
                        emp.getFirstName(),
                        emp.getLastName(),
                        emp.getEmailId()))
                .collect(Collectors.toList());
        
        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        EmployEntity employee = employRepository.findById(id).get();
        employRepository.delete(employee);
        return true;
    }

    @Override
    public Employ updateEmployee(Long id, Employ employ) {
        EmployEntity employEntity = employRepository.findById(id).get();
        employEntity.setFirstName(employ.getFirstName());
        employEntity.setLastName(employ.getLastName());
        employEntity.setEmailId(employ.getEmailId());
        employRepository.save(employEntity);
        return employ;
    }

    
}
