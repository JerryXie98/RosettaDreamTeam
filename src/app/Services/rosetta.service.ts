import { Injectable } from '@angular/core';
import { IRosettaFunctions } from '../Data Models/irosetta-functions';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RosettaService {

  functionsList: IRosettaFunctions[];
  functionValue: any;
  LISTFUNCTIONS_URL = 'http://localhost:61899/api/distancefunction/ListFunctions';

  constructor(private _http: HttpClient) { }

  getFunctionsList(): IRosettaFunctions[] {
    this._http.get(this.LISTFUNCTIONS_URL).subscribe(data => {
      this.functionsList = data['functions'];
    });
    return this.functionsList;
  }

  distanceFunction(url: string): Number {
    this._http.get(url).subscribe( data => {
      this.functionValue = data;
    });
    return this.functionValue;
  }
}
