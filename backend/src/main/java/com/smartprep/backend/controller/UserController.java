package com.smartprep.backend.controller;

import com.smartprep.backend.model.User;
import com.smartprep.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins="http://localhost:3000")
public class UserController {
    
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public User signup(@RequestBody User user){
            return userRepository.save(user);
        }

    
    @PostMapping("/login")
    public String login(@RequestBody User user){
            
            User existing = userRepository.findByEmail(user.getEmail());

            if(existing!=null && existing.getPassword().equals(user.getPassword())){
                return "Login Success";
            }

            return "Invalid Login";
        }

    @GetMapping("/all")
    public java.util.List<User> getAllUsers(){
        return userRepository.findAll();
    }
}
