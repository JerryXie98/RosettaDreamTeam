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
  title = 'Rosetta';
  rosettaFunctionList: IRosettaFunctions[];


  ngOnInit(): void {
    console.log('Settings is loaded!');
  }

  constructor(private _rosettaService: RosettaService, private _configService: ConfigService) {}

  OnClick() {
    this._rosettaService.getFunctionsList().subscribe(data => {
      this.rosettaFunctionList = data['functions'];
    });
  }
}
