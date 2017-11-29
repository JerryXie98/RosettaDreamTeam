import { Component, OnInit } from '@angular/core';
import { IRosettaFunctions } from '../../Models/irosetta-functions';
import { RosettaService } from '../../Services/rosetta.service';
import { ConfigService } from '../../Services/config.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { IPeople } from '../../Models/ipeople';
import { AppState } from '../../State/config-state';
import * as PeopleActions from '../../Actions/people';

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
    this.store.dispatch(new PeopleActions.EditCompany('Ikea'));
  }

  FunctionClick() {
     this._rosettaService.getFunctionsList().subscribe(data => {
       this.rosettaFunctionList = data['functions'];
     });
     this.store.dispatch(new PeopleActions.EditName('Joe Cool'));
     this.person$.subscribe(val => this.output = val.name);
  }
}
