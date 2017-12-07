import { Component, OnInit } from '@angular/core';
import { IRosettaFunctions } from '../../../Models/irosetta-functions';
import { RosettaService } from '../../../Services/rosetta.service';
import { IPeople } from '../../../Models/ipeople';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../../../Services/config.service';
import { AppState } from '../../../State/config-state';
import { Store } from '@ngrx/store';
import * as PeopleActions from '../../../Actions/people';

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
    'EDU to AESD',
    'Second Carrier'
  ];
  person$: Observable<IPeople>;
  output: string;

  constructor(private _rosettaService: RosettaService,
              private _configService: ConfigService,
              private store: Store<AppState>) {
    this.person$ = this.store.select('people');
  }
  ngOnInit() {
    console.log('Home is loaded!');
  }

  AddProject(addProject: string) {
    this.rosettaProjectList.push(addProject);
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
