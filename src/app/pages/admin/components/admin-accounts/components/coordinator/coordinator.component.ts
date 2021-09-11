import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.scss']
})
export class CoordinatorComponent implements OnInit {

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