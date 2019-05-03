import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.scss']
})
export class PopupModalComponent implements OnInit {

  @Input() data: any;
  @Output() restartModal: EventEmitter<any> = new EventEmitter<any>();

  modalShow : boolean;
  constructor() { 
  }

  ngOnInit() {
    console.log("Modal data processed");
    this.modalShow = this.data.modalShow;
    setTimeout(()=>{
      this.closeModal();
    },3000)
  }
  closeModal()
  {
    this.modalShow = false;
    setTimeout(()=>{
      this.restartModal.emit(false);
    },300)
  }

}
