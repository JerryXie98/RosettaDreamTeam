import { Component, OnInit } from '@angular/core';
import { IRosettaFunctions } from '../../Data Models/irosetta-functions';
import { RosettaService } from '../../Services/rosetta.service';
import { MatCardModule } from '@angular/material';
import { ConfigService } from '../../Services/config.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  ngOnInit(): void {
    console.log('Settings is loaded!');
  }
  title = 'Rosetta';
  rosettaFunctionList: IRosettaFunctions[];

  constructor(private _rosettaService: RosettaService, private _configService: ConfigService) {}

  OnClick() {
    this.rosettaFunctionList = this._rosettaService.getFunctionsList();
 
  }
}
