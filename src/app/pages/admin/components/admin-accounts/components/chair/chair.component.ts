import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.scss']
})
export class ChairComponent implements OnInit {

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