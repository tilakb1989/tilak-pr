import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name:string;
  exactName:string;
  isUserLoggedIn: boolean;
  constructor(private router: Router) {}

  ngOnInit() {
    this.name = "Ankhit";
    this.exactName = this.name.substr(0,1);
  }

  logout(){
    console.log("logout called");
    localStorage.removeItem("token");
    this.router.navigateByUrl('/login');
  }

}
