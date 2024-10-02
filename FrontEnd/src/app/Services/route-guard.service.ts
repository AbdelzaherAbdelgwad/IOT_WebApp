import { AuthLoginService } from './auth-login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //return true;
    if(this.auth.authenticated()){
      
      
      return true;
    }else{
      this.route.navigateByUrl('/homePage');
      alert("unauthorized");
      
      return false;
    }

    
  }
  constructor(private route:Router,private auth:AuthLoginService) {

   }
  
}
