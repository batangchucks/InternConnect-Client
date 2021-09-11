import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companydirectory-update',
  templateUrl: './companydirectory-update.component.html',
  styleUrls: ['./companydirectory-update.component.scss']
})
export class CompanydirectoryUpdateComponent implements OnInit {

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
