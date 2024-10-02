package com.Logs.login.Logs;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LogService {
    @Autowired
    private LogsRepository logsRepo;

    public Logs saveLog(Logs l){
        return logsRepo.save(l);
    }
    public List<Logs> saveLogs(List<Logs> Logs){
        return logsRepo.saveAll(Logs);
    }
    public Logs getLog(int id){
        return logsRepo.findById(id).orElse(null);
    }
    public List<Logs> getAllLogs(){
        return logsRepo.findAll();
    }


    public String deleteLog(int id){
        logsRepo.deleteById(id);
        return "User deleted ... with id: "+id;
    }


}
