import { AuthLoginService } from './../Services/auth-login.service';
import { HttpClient } from '@angular/common/http';
import { DoorLockService } from './Services/door-lock.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent{
  //date:Array<string>;
  // AllLogs:Object;
  state: string = 'Working';
  switchColor:string = "green";
  x:boolean = true; //camera switch
  lock1:string  ; lock2:string  ; //door states
  xLock1:boolean; xLock2:boolean; //door locks
  refLock:boolean = false; //ref lock
  refState:string = ''; //ref state
  logs: any;
  cameras:any;
  video:any;

  constructor(locks:DoorLockService, private http:HttpClient,private auth:AuthLoginService){
    
    this.lock1 = locks.Text; 
    this.xLock1 = locks.Lock; 
    this.lock2 = locks.Text; 
    this.xLock2 = locks.Lock; 
    if(this.refLock){
      this.refState = 'Closed'
    }else{
      this.refState = 'Open'
    }
   // this.logs= this.logss.getLogs();
   
  this.http.get('http://192.168.1.3:9191/Logs/findAllLogs').subscribe((data:any)=>this.logs= (data));
  this.http.get('http://192.168.1.3:9191/cam/AllCams').subscribe((data:any)=>this.cameras= (data));
  
    
  }

  //camera
  switched(){
    this.x = !this.x;
    this.state = this.x? 'Working':'Not Working';
    this.switchColor = this.x? 'green':'red';
  }
  //door 1
  locked1(){
   this.xLock1 = !this.xLock1;
   this.lock1 = this.xLock1? 'Locked':'Unlocked'
  }
  //door 2
  locked2(){
    this.xLock2 = !this.xLock2;
    this.lock2 = this.xLock2? 'Locked':'Unlocked' 
  }
  //refrigerator
  refDoor(){
    this.refLock = !this.refLock;
    this.refState = this.refLock?'Closed':'Open'
  }
  logout(){
    this.auth.logout();
    localStorage.setItem('auth','false')
    console.log(this.auth.authenticated());
    
  }


}

