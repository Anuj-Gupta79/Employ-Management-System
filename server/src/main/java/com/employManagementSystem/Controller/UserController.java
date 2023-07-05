package com.employManagementSystem.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employManagementSystem.Entity.UserEntity;
import com.employManagementSystem.Model.User;
import com.employManagementSystem.Services.UserServiceInterface;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserServiceInterface userServiceInterface;

    @PostMapping("/create")
    public UserEntity createUser(@RequestBody User user) {
        return userServiceInterface.createUser(user);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Boolean>> login(@RequestBody User user) {
        Boolean getLogin = false;
        getLogin = userServiceInterface.login(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("login", getLogin);
        return ResponseEntity.ok(response);
    }
}
