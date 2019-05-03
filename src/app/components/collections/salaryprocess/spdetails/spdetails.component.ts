import { Component, OnInit,Input, Output } from '@angular/core';
import { SalaryprocessService } from 'src/app/services/collections/salaryprocess/salaryprocess.service';

@Component({
  selector: 'app-spdetails',
  templateUrl: './spdetails.component.html',
  styleUrls: ['./spdetails.component.scss']
})
export class SpdetailsComponent implements OnInit {
  @Input() tableContent: any;
  @Input() tableButton: any;
  @Input() userStatus: number;

  constructor(private sp: SalaryprocessService) { }

  showTable: boolean;
  status: boolean;
  payAmount: any[];
  adj_amount: number;
  modeOfPayment: string[];
  payAmountSelected: any;
  modeOfPaymentSelected: any;
  tds:number;
  processData: any;
  loader: boolean = false;
  ngOnInit() {
    this.showTable = false;
     if(this.userStatus == 1)
        this.status = true;
     else
        this.status = false;

      this.payAmount = [
        10000,
        20000,
        30000,
        40000,
        50000
      ];
      this.tds = this.tableContent.tds * 10 / 100;
      this.payAmountSelected = this.tableContent.payment_amount;
      this.modeOfPayment = [
        "Bank Transfer",
        "Cash",
        "PAYTM"
      ];
      this.modeOfPaymentSelected = this.tableContent.modeof_payment; 
  }

}
