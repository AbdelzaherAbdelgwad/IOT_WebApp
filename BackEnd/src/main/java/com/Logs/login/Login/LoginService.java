package com.Logs.login.Login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginService {
    @Autowired

    private LoginRepository logRepo;

    public Login saveUser(Login login){
        return logRepo.save(login);
    }
    public List<Login> saveUsers(List<Login> login){
        return logRepo.saveAll(login);
    }
    public Login getUser(int id){
        return logRepo.findById(id).orElse(null);
    }
    public List<Login> getUsers(){
        return logRepo.findAll();
    }
    public Login getUserByName(String username){
        return logRepo.findByUsername(username);
    }

    public String deleteUser(int id){
        logRepo.deleteById(id);
        return "User deleted ... with id: "+id;
    }

    public Login updateUser(Login login){
        Login usr = logRepo.findById(login.getId()).orElse(null);
        usr.setId(login.getId());
        usr.setPassword(login.getPassword());
        usr.setUsername(login.getUsername());
        return logRepo.save(usr);

    }

}
