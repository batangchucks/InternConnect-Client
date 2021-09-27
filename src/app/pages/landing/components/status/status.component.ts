import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  FormEntry: boolean = false;
  CompanyEntry: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  toUpdate() {
    this.FormEntry = true;
  }

  toClose() {
    this.FormEntry = false;
  }

  toChange() {
    this.CompanyEntry = true;
  }

  toCloseSecond() {
    this.CompanyEntry = false;
  }


}
