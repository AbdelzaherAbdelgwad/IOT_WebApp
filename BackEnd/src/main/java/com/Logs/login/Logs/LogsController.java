package com.Logs.login.Logs;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Logs")
public class LogsController {
    @Autowired
    private LogService logService;

    @PostMapping("/addLog")
    public Logs addLog(@RequestBody Logs Logs){
        return logService.saveLog(Logs);
    }

    @PostMapping("/addLogs")
    public List<Logs> addLogs(@RequestBody List<Logs>  Logs){
        return logService.saveLogs(Logs);
    }

    @CrossOrigin("http://192.168.1.3:4200")
    @GetMapping("/findAllLogs")
    public List<Logs> findAllLogs(){
        return logService.getAllLogs();
    }

   @GetMapping("/findLogById/{id}")
    public Logs findLog(@PathVariable int id){
        return logService.getLog(id);
    }
    @DeleteMapping("/deleteLog/{id}")
    public String deleteLog(@PathVariable int id){
        return logService.deleteLog(id);
    }
}