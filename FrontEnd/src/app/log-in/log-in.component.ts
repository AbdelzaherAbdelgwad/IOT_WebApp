import { LoginValidationService } from './Services/login-validation.service';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthLoginService } from '../Services/auth-login.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {
 //public userForm:FormGroup; 
 //value:string='';
  users:any;
  //names :String[] = []; 
  //passwords:String[] = []; 
  nameV: boolean=false;
  passV: boolean=false;
  returnVal:any;
 
  constructor(private router: Router,  private http:HttpClient,public auth:AuthLoginService) {

  }
  ngOnInit() {
    let response:any =  this.http.get('http://192.168.1.3:9191/findAllUsers')
    response.subscribe((data:any)=>this.users=data); 
    
  }

  validations = new FormGroup({
    user: new FormControl("", Validators.required),
    pass: new FormControl(null, Validators.required)
  });
 
  


addUsers(){
  const user = {"name":this.validations.get('user')?.value,
  "pass":<unknown>this.validations.get('pass')?.value}
  let n: string[]=[];
  let p: string[]=[];
  let nameV: boolean=false;
  let passV: boolean=false;

for(let x=0; x< Object.keys(this.users).length ;x++){
  n.push(this.users[x].username)
  p.push(this.users[x].password)
 }
 if(n.includes(<string>user.name)){
  nameV = true;
 }
 if(p[n.indexOf(<string>user.name)]==<string>user.pass){
  passV = true;
 }
 this.passV = passV;
 this.nameV = nameV;
 //this.names = n;
 //this.passwords = p;
}

submit() {
  let n: string[]=[];
  this.addUsers();
  if(this.nameV){
    if(this.passV){
      localStorage.setItem('auth','true')
      this.auth.login();
      this.router.navigateByUrl('/'+this.validations.get('user')?.value);

    }else{
      alert("Wrong password")
    }
  }else{
    alert("wrong Username")
  }
  
  
   
    
  

  
  //console.log(this.names);
  
  
}

}

 



 /*
  if(this.names.includes(<string>this.validations.get('user')?.value)  ){
   let index  = this.names.indexOf(<string>this.validations.get('user')?.value);
    if(<unknown>this.validations.get('pass')?.value == this.passwords[index]){
      this.router.navigateByUrl('/'+this.validations.get('user')?.value);
    }else{
      alert("wrong pass")
    }
    
    console.log(this.validations.get('user')?.valid);
  }
  else{
    alert("wrong username ")
  }*/
