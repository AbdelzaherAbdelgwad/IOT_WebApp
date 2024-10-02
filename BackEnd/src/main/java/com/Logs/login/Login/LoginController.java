package com.Logs.login.Login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@CrossOrigin("http://192.168.1.3:4200")
public class LoginController {
    @Autowired
    private LoginService logServe;

    @PostMapping("/addUser")
    public Login addUser(@RequestBody Login login){
        return logServe.saveUser(login);
    }
    @PostMapping("/addUsers")
    public List<Login> addUsers(@RequestBody List<Login>  login){
        return logServe.saveUsers(login);
    }

    @GetMapping("/findAllUsers")
    public List<Login> findAllUsers(){
        return logServe.getUsers();
    }
    @GetMapping("/findUserById/{id}")
    public Login findUser(@PathVariable int id){
        return logServe.getUser(id);
    }
    @GetMapping("/findAllUser/{name}")
    public Login findUserByName(@PathVariable String username){
        return logServe.getUserByName(username);
    }
    @PostMapping("updateUser")
    public Login updateUser(@RequestBody  Login login){
        return logServe.updateUser(login);
    }
    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable int id){
        return logServe.deleteUser(id);
    }




}
