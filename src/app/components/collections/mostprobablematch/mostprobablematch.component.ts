import { Component, OnInit } from '@angular/core';
import { MostprobablematchService } from '../../../services/collections/mostprobablematch/mostprobablematch.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-mostprobablematch',
  templateUrl: './mostprobablematch.component.html',
  styleUrls: ['./mostprobablematch.component.scss']
})
export class MostprobablematchComponent implements OnInit {
  tableHeaders: any;
  tableContent: any;
  tableButton: string;
  showTable: boolean;
  userStatus: any;
  modal: any;
  show:boolean;
  errorMessage: string;
  constructor(private mpm: MostprobablematchService,private user: LoginService) { }

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
    this.tableButton = "Accept";
    this.mpm.getMpm().subscribe( 
      data => this.tableContent = data,
      error => this.errorMessage = <any>error
    );

    this.showTable = false;
    this.show = false;
    this.userStatus = this.user.setUserLoggedIn.value;
  }
  
  getInvoiceNo(data: string){
    this.show = true;
    this.modal = {
      modalInvoiceNo : data,
      modalShow : true
    };
  }
  resModal(data: boolean)
  {
    this.show = data;
  }

}
