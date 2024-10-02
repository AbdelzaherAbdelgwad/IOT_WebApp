import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginValidationService {
  users:any;
  names :String[] = []; 
  passwords:String[] = []; 
  private base_url = this.http.get('http://localhost:9191/findAllUsers')

  constructor(private http:HttpClient) {    
  }
  
  logging(user:any):Observable<object>{
    console.log(user);
    
    return this.http.post(`${this.base_url}`,user)
  }

}
