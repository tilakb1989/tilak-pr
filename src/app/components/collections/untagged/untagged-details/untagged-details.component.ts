import { Component, OnInit,Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { UntaggedService } from 'src/app/services/collections/untagged/untagged.service';

@Component({
  selector: 'app-untagged-details',
  templateUrl: './untagged-details.component.html',
  styleUrls: ['./untagged-details.component.scss']
})
export class UntaggedDetailsComponent implements OnInit {
  @Input() tableContent: any;
  @Input() tableButton: any;
  @Input() userStatus: number;
  @Output() invoiceNo: EventEmitter<any> = new EventEmitter<any>();


  showTable: boolean;
  status: boolean;
  payAmount: any[];
  adj_amount: number;
  modeOfPayment: string[];
  payAmountSelected: any;
  modeOfPaymentSelected: any;
  processData: any;
  btnText: string = "Process";
  loader: boolean = false;
  constructor(private untagService: UntaggedService) {  }

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
      this.payAmountSelected = this.tableContent.payment_amount;
      this.modeOfPayment = [
        "Bank Transfer",
        "Cash",
        "PAYTM"
      ];
      this.modeOfPaymentSelected = this.tableContent.modeof_payment; 
  }

  
  

  process()
  {
      this.loader = true;
      this.processData = {
        payment_amount : Number(this.payAmountSelected),
        adjusted_amount : this.tableContent.adjusted_amount,
        tds: this.tableContent.tds,
        utr_number: this.tableContent.utr_number,
        payment_date: this.tableContent.payment_date,
        payment_time: this.tableContent.payment_time,
        modeof_payment: this.modeOfPaymentSelected,
        balance: this.tableContent.balance,
        total_amount:this. tableContent.total_amount,
      }
      // this.processData = {
      //   "userId": 1,
      //   "id": 1
      //   }
      this.untagService.postUntaggedContent(this.processData).subscribe(
        data => { 
          console.log(data);
          this.showTable = false;
          this.invoiceNo.emit(this.tableContent.invoice_no);
          this.loader = false;
        },
        error => console.error(error)
      );

  }



}
