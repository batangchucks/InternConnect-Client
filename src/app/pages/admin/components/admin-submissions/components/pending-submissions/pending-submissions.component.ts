import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-submissions',
  templateUrl: './pending-submissions.component.html',
  styleUrls: ['./pending-submissions.component.scss']
})
export class PendingSubmissionsComponent implements OnInit {

  SentIndicator: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toTrue() {
    this.SentIndicator = true;
  }

  toFalse() {
    this.SentIndicator = false;
  }

}
