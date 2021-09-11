import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  CreateProgramIndicator: boolean = false;
  UpdateProgramIndicator: boolean = false;

  CreateTrackIndicator: boolean = false;
  UpdateTrackIndicator: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toCreateProgram() { 
    this.CreateProgramIndicator = true;
  } 

  toCancelOne() { 
    this.CreateProgramIndicator = false;
  } 

  toUpdateProgram() { 
    this.UpdateProgramIndicator = true;
  } 

  toCancelTwo() {
    this.UpdateProgramIndicator = false;
  }
  
  toCreateTrack() {
    this.CreateProgramIndicator = true;
  }

  toCancelThree() {
    this.CreateProgramIndicator = false;
  }

  toUpdateTrack() {
    this.UpdateTrackIndicator = true;
  }

  toCancelFour() {
    this.UpdateTrackIndicator = false;
  }
}