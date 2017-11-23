import { Injectable } from '@angular/core';
import { IRosettaFunctions } from '../Data Models/irosetta-functions';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RosettaService {

  functionsList: IRosettaFunctions[];
  functionValue: any;
  LISTFUNCTIONS_URL = 'http://localhost:61899/api/distancefunction/ListFunctions';
  URLTEMPLATE = 'http://localhost:61899/api/distancefunction/';
  urlString: string;

  constructor(private _http: HttpClient) { }

  getFunctionsList() {
    return this._http.get(this.LISTFUNCTIONS_URL);
  }

  distanceFunction(functionName: string, stringA: string, stringB: string) {
    this.urlString = this.URLTEMPLATE + functionName + '?strA=' + stringA + '&strB=' + stringB;
    return this._http.get(this.urlString);
  }


}
