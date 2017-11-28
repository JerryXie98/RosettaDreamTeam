import {Component, Input, OnInit} from '@angular/core';
import { IRosettaFunctions } from '../../Models/irosetta-functions';
import { RosettaService } from '../../Services/rosetta.service';
import { ConfigService } from '../../Services/config.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { IPeople } from '../../Models/ipeople';
import * as PeopleActions from '../../Actions/people';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
  rosettaFunctionList: IRosettaFunctions[];
  integer = 'Integer';

  expression = '';
  constructor(private _rosettaService: RosettaService) { }

  ngOnInit() {
    this._rosettaService.getFunctionsList().subscribe(data => {
      this.rosettaFunctionList = data['functions'];
    });

    console.log('Types loaded!');
  }
}
