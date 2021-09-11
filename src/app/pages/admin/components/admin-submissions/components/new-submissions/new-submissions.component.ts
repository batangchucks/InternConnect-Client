import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-submissions',
  templateUrl: './new-submissions.component.html',
  styleUrls: ['./new-submissions.component.scss']
})
export class NewSubmissionsComponent implements OnInit {

  FormEntry: boolean = false;
  ApproveIndicator: boolean = false;
  DisapproveIndicator: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toOpen() {
    this.FormEntry = true;
  }

  toClose() {
    this.FormEntry = false;
  }

  toApprove() {
    this.ApproveIndicator = true;
  }

  toCancelOne() {
    this.ApproveIndicator = false;
  }

  toDisapprove() {
    this.DisapproveIndicator = true;
  }

  toCancelTwo() {
    this.DisapproveIndicator = false;
  }
}
