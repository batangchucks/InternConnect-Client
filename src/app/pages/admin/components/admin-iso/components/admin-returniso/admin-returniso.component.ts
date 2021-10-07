import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-returniso',
  templateUrl: './admin-returniso.component.html',
  styleUrls: ['./admin-returniso.component.scss']
})
export class AdminReturnisoComponent implements OnInit {

  TransferIndicator: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toTransfer() { 
    this.TransferIndicator = true;
  } 

  toCancel() { 
    this.TransferIndicator = false;
  } 

}
