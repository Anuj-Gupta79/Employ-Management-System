package com.employManagementSystem.Services;

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
}
