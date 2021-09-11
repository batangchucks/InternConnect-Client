import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

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