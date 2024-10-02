import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DoorLockService } from '../home-user/Services/door-lock.service';
import { AuthLoginService } from '../Services/auth-login.service';

@Component({
  selector: 'app-smart-company',
  templateUrl: './smart-company.component.html',
  styleUrls: ['./smart-company.component.css']
})
export class SmartCompanyComponent {
  comps:string = "/Company";
  comp(){
    
  }
 
}
