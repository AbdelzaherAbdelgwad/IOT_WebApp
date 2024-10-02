package com.Logs.login.AppliedUsers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Users")
@CrossOrigin("http://192.168.1.3:4200")
public class UserController {
   @Autowired
   private UserService userServe;

   @PostMapping("/saveUser")
   public User save(@RequestBody  User user){
       return userServe.saveUser(user);
   }
   @GetMapping("/getAllUser")
   public List<User> getUsers(){
       return userServe.getUsers();
   }
    @GetMapping("/getUserByName/{name}")
   public User getUserByName(@PathVariable String name){
       return userServe.getUserByName(name);
   }
   @DeleteMapping("/deleteUser/{id}")
   public String deleteUser(@PathVariable int id){
       return userServe.deleteUser(id);
   }
    @DeleteMapping("/deleteAll")
    public String deleteAll(){
        return userServe.deleteUsers();
    }


}
