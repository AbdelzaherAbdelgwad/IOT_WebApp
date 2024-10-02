import { User } from './User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {
  url = "http://localhost:9191/Users/saveUser";
  constructor(private http:HttpClient) { 

  }
  addUser(user?:User):Observable<Object>{
    return this.http.post<Object>(`${this.url}`,user);
  }
}
