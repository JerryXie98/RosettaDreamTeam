import { Component, OnInit } from '@angular/core';
import { IRosettaFunctions } from '../../Data Models/irosetta-functions';
import { RosettaService } from '../../Services/rosetta.service';
import { MatCardModule } from '@angular/material';
import { ConfigService } from '../../Services/config.service';

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

  constructor(private _rosettaService: RosettaService, private _configService: ConfigService) {}

  OnClick() {
    this.rosettaFunctionList = this._rosettaService.getFunctionsList();
  RosettaClick() {
    this._configService.sendDummyConfig().subscribe(data => {
        console.log(data);
      }
    );
  }

  FunctionClick() {
     this._rosettaService.getFunctionsList().subscribe(data => {
       this.rosettaFunctionList = data['functions'];
     });
  }

  ngOnInit() {
    console.log('Home is loaded!');
  }


}
