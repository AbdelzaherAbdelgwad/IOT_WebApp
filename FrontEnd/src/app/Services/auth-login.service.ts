import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
   state:boolean = false;
  constructor() {
    const authValue = localStorage.getItem('auth');
    if (authValue === 'true') {
      this.state = true;
    } else if (authValue === 'false') {
      this.state = false;
    } else {
     
      this.state = false;
    }
  }
   
  login(){
    this.state= true;
    
  }
  logout(){
    this.state= false;
  }
  
  authenticated():boolean{
    return this.state;
  }


}
