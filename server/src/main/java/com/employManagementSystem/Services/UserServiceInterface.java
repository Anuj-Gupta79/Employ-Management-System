package com.employManagementSystem.Services;

import com.employManagementSystem.Entity.UserEntity;
import com.employManagementSystem.Model.User;

public interface UserServiceInterface {

    UserEntity createUser(User user);

    Boolean login(User user);
    
}
