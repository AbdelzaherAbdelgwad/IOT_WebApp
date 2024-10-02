package com.Logs.login.Cameras;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cam")
public class CamerasController {


    @Autowired
    private CameraService camService;

    @PostMapping("/addCam")
    public Cameras addCam(@RequestBody Cameras cam){
        return camService.saveCam(cam);
    }
    @PostMapping("/addCams")
    public List<Cameras> addCams(@RequestBody List<Cameras> cams){
        return camService.saveCams(cams);
    }

    @CrossOrigin("http://192.168.1.3:4200")
    @GetMapping("/AllCams")
    public List<Cameras> allCams(){
        return camService.getCams();
    }
    @GetMapping("/Camera")
    public Cameras findCameraByName(@RequestBody String camName){
        return camService.findCamByName(camName);
    }
    @DeleteMapping("/deleteCam/{id}")
    public String deleteCamera(@PathVariable int id){
        camService.deleteCam(id);
        return "Camera deleted by id: "+id;
    }




}
