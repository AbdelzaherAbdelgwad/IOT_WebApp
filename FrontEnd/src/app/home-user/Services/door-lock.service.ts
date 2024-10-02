import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
  
})
export class DoorLockService {
  Text:string = 'Locked';
  Lock:boolean = true;
  
  /*lockDoor(t:string,l:boolean){
    l = !l;
    t = t? 'Locked':'Unlocked' 
  }*/
}
