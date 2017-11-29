import {Component, Input, OnInit} from '@angular/core';
import { IRosettaFunctions } from '../../Models/irosetta-functions';
import { RosettaService } from '../../Services/rosetta.service';
import { ConfigService } from '../../Services/config.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { IPeople } from '../../Models/ipeople';
import * as PeopleActions from '../../Actions/people';
import { AppState } from '../../State/config-state';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
  rosettaFunctionList: IRosettaFunctions[];
  integer = 'Integer';
  output: String;
  value$: Observable<IPeople>;

  expression = '';
  constructor(private _rosettaService: RosettaService, private store: Store<AppState>) {
    this.value$ = this.store.select('people');
  }

  ngOnInit() {
    this._rosettaService.getFunctionsList().subscribe(data => {
      this.rosettaFunctionList = data['functions'];
    });
    console.log('Types loaded!');
  }

  NgrxTest() {
    this.store.dispatch(new PeopleActions.EditName('Josh Cool'));
    this.value$.subscribe(data => console.log(data.name));
  }
}
