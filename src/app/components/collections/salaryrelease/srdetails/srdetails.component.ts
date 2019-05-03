import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-srdetails',
  templateUrl: './srdetails.component.html',
  styleUrls: ['./srdetails.component.scss']
})
export class SrdetailsComponent implements OnInit {

  @Input() tableContent: any;
  @Input() tableButton: any;
  @Input() userStatus: number;
  constructor() { }
  ngOnInit() {
  }

}
