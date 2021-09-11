import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opportunities-update',
  templateUrl: './opportunities-update.component.html',
  styleUrls: ['./opportunities-update.component.scss']
})
export class OpportunitiesUpdateComponent implements OnInit {

  CreateIndicator: boolean = false;
  UpdateIndicator: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toCreate() { 
    this.CreateIndicator = true;
  } 

  toCancelOne() { 
    this.CreateIndicator = false;
  } 

  toUpdate() { 
    this.UpdateIndicator = true;
  } 

  toCancelTwo() {
    this.UpdateIndicator = false;
  } 
}
