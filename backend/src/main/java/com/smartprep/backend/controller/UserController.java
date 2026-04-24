package com.smartprep.backend.controller;

import com.smartprep.backend.model.User;
import com.smartprep.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")

public class UserController {
    
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/add")
    public User addUser(@RequestBody User user){
        return userRepository.save(user);
    }

    @GetMapping("/all")
    public java.util.List<User> getAllUsers(){
        return userRepository.findAll();
    }
}
