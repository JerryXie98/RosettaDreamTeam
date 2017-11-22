import { Component, OnInit } from '@angular/core';
import { IRosettaFunctions } from '../../Data Models/irosetta-functions';
import { RosettaService } from '../../Services/rosetta.service';
import { MatCardModule } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Rosetta';
  rosettaFunctionList: IRosettaFunctions[];
  matListCheck: string[];
  rosettaProjectList = [
    "EDU to AESD",
    "Second Carrier"
  ];

  constructor(private _rosettaService: RosettaService) {
  }

  OnClick() {
    this.rosettaFunctionList = this._rosettaService.getFunctionsList();
  }

  ngOnInit() {
    console.log('Home is loaded!');
  }


}
