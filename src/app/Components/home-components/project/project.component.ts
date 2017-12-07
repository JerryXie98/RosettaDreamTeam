import { Component, OnInit } from '@angular/core';
import { IRosettaFunctions } from '../../../Models/irosetta-functions';
import { RosettaService } from '../../../Services/rosetta.service';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../../../Services/config.service';
import { AppState } from '../../../State/config-state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  title = 'Rosetta';
  rosettaFunctionList: IRosettaFunctions[];
  matListCheck: string[];
  output: string;

  constructor(private _rosettaService: RosettaService,
              private _configService: ConfigService,
              private store: Store<AppState>) {
  }
  ngOnInit() {
    console.log('Project has loaded!');
  }

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
}
