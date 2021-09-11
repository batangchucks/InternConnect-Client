import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-esignature',
  templateUrl: './admin-esignature.component.html',
  styleUrls: ['./admin-esignature.component.scss']
})
export class AdminEsignatureComponent implements OnInit {

  EsigIndicator: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  AcceptToTrue() { 
    this.EsigIndicator = false;
  } 

}
