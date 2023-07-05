package com.employManagementSystem.Services;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employManagementSystem.Entity.UserEntity;
import com.employManagementSystem.Model.User;
import com.employManagementSystem.Repository.UserRepository;

@Service
public class UserServiceImplementation implements UserServiceInterface {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserEntity createUser(User user) {
        UserEntity userEntity = new UserEntity();

        BeanUtils.copyProperties(user, userEntity);
        userRepository.save(userEntity);
        return userEntity;
    }

    @Override
    public Boolean login(User user) {
        String emailId = user.getEmailId();
        UserEntity userEntity = userRepository.findByEmailId(emailId);
        if(userEntity == null){
            return false;
        }

        if(userEntity.getPassword() != userEntity.getPassword()){
            return false;
        }

        return true;
    }

}
