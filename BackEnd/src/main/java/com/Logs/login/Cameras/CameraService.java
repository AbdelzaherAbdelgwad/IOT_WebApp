package com.Logs.login.Cameras;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CameraService {
    @Autowired
    private CamerasRepository camRepo;


    public Cameras saveCam(Cameras cam){
        return camRepo.save(cam);
    }
    public List<Cameras> saveCams(List<Cameras> cam){
        return camRepo.saveAll(cam);
    }

    public List<Cameras> getCams(){
        return camRepo.findAll();
    }
    public Cameras findCamByName(String Name){
        return camRepo.findByName(Name);
    }
    public String deleteCam(int id){
        camRepo.deleteById(id);
        return "Camera deleted by id: "+id;
    }
}
