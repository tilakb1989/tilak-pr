import { Component, OnInit } from '@angular/core';
import { UntaggedService } from '../../../services/collections/untagged/untagged.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-untagged',
  templateUrl: './untagged.component.html',
  styleUrls: ['./untagged.component.scss']
})
export class UntaggedComponent implements OnInit {
  tableHeaders: any;
  tableContent: any;
  tableButton: string;
  showTable: boolean;
  userStatus: any;
  modal: any;
  show:boolean;
  errorMessage: string;
  constructor(private untagged: UntaggedService,private user: LoginService) { }

  ngOnInit() {

    this.tableHeaders = [
      "Client Id",
      "Client Name",
      "Invoice NUmber",
      "Invoice Amount",
      "Invoice Date",
      "Action"
    ];
    this.tableButton = "Tag Payment";

    this.untagged.getUntaggedContent().subscribe( 
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
