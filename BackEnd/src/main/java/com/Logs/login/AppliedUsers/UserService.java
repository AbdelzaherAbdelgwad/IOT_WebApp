package com.Logs.login.AppliedUsers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserReopsitory userRepo;

    public User saveUser(User user){

        return userRepo.save(user);

    }
    public List<User> getUsers(){
        return userRepo.findAll();
    }
    public User getUserByName(String username){
        return userRepo.findByfullName(username);
    }
    public String deleteUsers(){
        userRepo.deleteAll();
        return "allDeleted";
    }
    public String deleteUser(int id){
        userRepo.deleteById(id);
        return "User deleted ... with id: "+id;
    }

}
