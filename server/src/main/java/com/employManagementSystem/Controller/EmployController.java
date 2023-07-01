package com.employManagementSystem.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employManagementSystem.Entity.EmployEntity;
import com.employManagementSystem.Model.Employ;
import com.employManagementSystem.Services.EmployService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/employ")
public class EmployController {

    @Autowired
    private EmployService employService;

    @GetMapping("/hello")
    public String hello() {
        return "Hello Mate! Server is running fine.";
    }

    @PostMapping("/create")
    public EmployEntity createEmploy(@RequestBody Employ employ) {
        return employService.createEmploy(employ);
    }

}
