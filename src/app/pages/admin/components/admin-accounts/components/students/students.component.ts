import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

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