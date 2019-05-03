import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { LoginService } from '../login/login.service';
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private loginservice: LoginService,private router: Router) {
    
   }
   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

     if(localStorage.getItem("token") != null)
      return true;
      this.router.navigateByUrl('/login');
      return false;
   }
}
