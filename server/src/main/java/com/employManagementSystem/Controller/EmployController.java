package com.employManagementSystem.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @GetMapping("/show")
    public List<Employ> getAllEmployee(){
        return employService.getAllEmployee();
    }

    @GetMapping("/show/{id}")
    public Optional<EmployEntity> getEmployById(@PathVariable Long id){
        return employService.getEmployById(id);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
        boolean deleted = false;
        deleted = employService.deleteEmployee(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }


}
