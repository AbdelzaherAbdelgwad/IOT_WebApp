import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DoorLockService } from '../home-user/Services/door-lock.service';
@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {
  
  state: string = 'Working';
  switchColor:string = "green";

  x:boolean = true; //camera switch

  lock1:string  ; lock2:string  ; //door states
  xLock1:boolean; xLock2:boolean; //door locks

  refLock:boolean = false; //ref lock
  refState:string = ''; //ref state
  //date:Array<string>;
 
  logs:Array<any> = [];
  
  
  
  constructor(locks:DoorLockService, private http:HttpClient){
    this.lock1 = locks.Text; 
    this.xLock1 = locks.Lock; 
    this.lock2 = locks.Text; 
    this.xLock2 = locks.Lock; 
    if(this.refLock){
      this.refState = 'Closed'
    }else{
      this.refState = 'Open'
    }
    let response:any = this.http.get('http://localhost:9191/Logs/findAllLogs').subscribe((data:any)=>this.logs= (data));
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


}
