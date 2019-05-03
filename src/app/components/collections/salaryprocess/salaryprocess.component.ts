import { Component, OnInit } from '@angular/core';
import { SalaryprocessService } from '../../../services/collections/salaryprocess/salaryprocess.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-salaryprocess',
  templateUrl: './salaryprocess.component.html',
  styleUrls: ['./salaryprocess.component.scss']
})
export class SalaryprocessComponent implements OnInit {
  tableHeaders: any;
  tableContent: any;
  tableButton: string;
  showTable: boolean;
  userStatus: any;
  modal: any;
  show:boolean;
  errorMessage: string;
  constructor(private sp: SalaryprocessService,private user: LoginService) { }

  ngOnInit() {
    this.tableHeaders = [
      "Client Id",
      "Client Name",
      "Invoice NUmber",
      "Invoice Amount",
      "Type",
      "Invoice Date",
      "Mode",
      "Action"
    ];
    this.tableButton = "View";
    this.sp.getsalaryProcess().subscribe( 
      data => this.tableContent = data,
      error => this.errorMessage = <any>error
    );

    this.showTable = false;
    this.show = false;
    this.userStatus = this.user.setUserLoggedIn.value;
  }

}
