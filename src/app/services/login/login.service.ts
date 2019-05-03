import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { httpOptions,apiUrl } from '../../api/api';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  loggedIn: boolean;
  token: any;
  public status$: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.loggedIn = false;
    if(localStorage.getItem("token") !== null)
    {
      let token = localStorage.getItem("token");
      this.setUserLoggedIn = JSON.parse(token);
    }
   }
   

  getUrl() {
    return this.http.get(apiUrl.login,httpOptions);
  }


  get setUserLoggedIn(){
    return this.status$;
  }

  set setUserLoggedIn(data: any){
    this.loggedIn = true;
    this.status$ = new BehaviorSubject(data.status);
    this.token = {
      status: data.status,
      access_token: data.access_token 
    }
    localStorage.setItem("token",JSON.stringify(this.token));
  }
}
