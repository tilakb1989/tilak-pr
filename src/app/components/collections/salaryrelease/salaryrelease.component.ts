import { Component, OnInit } from '@angular/core';
import { SalaryreleaseService } from '../../../services/collections/salaryrelease/salaryrelease.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-salaryrelease',
  templateUrl: './salaryrelease.component.html',
  styleUrls: ['./salaryrelease.component.scss']
})
export class SalaryreleaseComponent implements OnInit {
  tableHeaders: any;
  tableContent: any;
  tableButton: string;
  userStatus: any;
  show:boolean;
  errorMessage: string;
  constructor(private sr: SalaryreleaseService, private user: LoginService ) { }
  
  ngOnInit() {
    this.tableHeaders = [
      "Client Id",
      "Client Name",
      "Invoice Number",
      "Invoice Amount",
      "Type",
      "Invoice Date",
      "Mode",
      "Status"
    ];
    this.tableButton = "Accept";
    this.sr.getSalarayRelease().subscribe( 
      data => this.tableContent = data,
      error => this.errorMessage = <any>error
    );

    this.show = false;
    this.userStatus = this.user.setUserLoggedIn.value;
  }

}
