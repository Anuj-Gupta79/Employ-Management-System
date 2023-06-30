package com.employManagement.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("employee")
public class EmployeeController {
    
    @GetMapping("/hello")
    public String hello(){
        return "Hello World! The server is running fine.";
    }
}