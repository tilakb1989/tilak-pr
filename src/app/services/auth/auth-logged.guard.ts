import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthLoggedGuard  {
  constructor(private router: Router){

  }
  resolve(): void {
    if(localStorage.getItem("token") != null) 
      this.router.navigateByUrl('/home/collections')
  }
}
