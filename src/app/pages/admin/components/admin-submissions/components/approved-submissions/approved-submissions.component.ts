import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approved-submissions',
  templateUrl: './approved-submissions.component.html',
  styleUrls: ['./approved-submissions.component.scss']
})
export class ApprovedSubmissionsComponent implements OnInit {

  FormEntry: boolean = false;
  AcceptIndicator: boolean = false;
  RejectIndicator: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toOpen() {
    this.FormEntry = true;
  }

  toClose() {
    this.FormEntry = false;
  }

  toAccept(){
    this.AcceptIndicator = true;
  }

  toCancelOne(){
    this.AcceptIndicator = false;
  }

  toReject(){
    this.RejectIndicator = true;
  }

  toCancelTwo(){
    this.RejectIndicator = false;
  }

}
