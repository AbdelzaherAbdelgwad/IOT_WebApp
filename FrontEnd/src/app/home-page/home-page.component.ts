import { AddUserService } from './add-user.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './User';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  pack:string ='Package';
  user:User = new User();

  
  constructor(private http:HttpClient,private addUserService:AddUserService){
   

  }

  validations = new FormGroup({
    user: new FormControl("", Validators.required),
    email: new FormControl('', [Validators.email,Validators.required]),
    pack: new FormControl('Package',Validators.required)
  });




  home(){
    this.pack = 'SmartHome';
    this.user.package_ = this.pack
  }
  hosp(){
    this.pack = 'SmartHospital';
    this.user.package_ = this.pack
  }
  comp(){
    this.pack = 'SmartCompany';
    this.user.package_ = this.pack
  }
  bank(){
    this.pack = 'SmartBank';
    this.user.package_ = this.pack
  }

  send(){
    if(this.validations.get('user')?.valid){
      if(this.validations.get('email')?.valid){
        if(this.validations.get('pack')?.valid){
          console.log(this.user);
        this.addUserService.addUser(this.user).subscribe();
        }else{
          alert("no package selected")
        }
        
        
      }else{
        alert("incorrect email")
      }

    }else{
      alert("no user")
    }
  }
}
