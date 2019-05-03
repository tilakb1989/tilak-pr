import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loggedIn:boolean;
  username: string;
  password:string;
  constructor( private router: Router, private logservice: LoginService) { }

  ngOnInit() {
    this.signUp();
  }

  signUp(){
    this.logservice.getUrl().subscribe((data: any) =>  {
          if(data.name == this.username && data.password == this.password )
          {
            console.log("Username & Password  matches");
            this.logservice.setUserLoggedIn = data;
            this.router.navigateByUrl('/collections');
          }
      });
  }

}
