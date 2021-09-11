import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-techprogram',
  templateUrl: './techprogram.component.html',
  styleUrls: ['./techprogram.component.scss']
})
export class TechprogramComponent implements OnInit {

  UpdateIndicator: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toUpdate() { 
    this.UpdateIndicator = true;
  } 

  toCancel() {
    this.UpdateIndicator = false;
  } 
}