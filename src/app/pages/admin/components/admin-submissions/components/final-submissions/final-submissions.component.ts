import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final-submissions',
  templateUrl: './final-submissions.component.html',
  styleUrls: ['./final-submissions.component.scss']
})
export class FinalSubmissionsComponent implements OnInit {

  FormEntry: boolean = false;
  ApproveIndicator: boolean = false;
  DisapproveIndicator: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toOpen(){
    this.FormEntry = true;
  }

  toClose(){
    this.FormEntry = false;
  }

  toApprove() {
    this.ApproveIndicator = true;
  }

  toCancelOne() {
    this.ApproveIndicator = false;
  }

  toDisapprove(){
    this.DisapproveIndicator = true;
  }

  toCancelTwo(){
    this.DisapproveIndicator = false;
  }

}
