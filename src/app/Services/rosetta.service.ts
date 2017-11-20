import { Injectable } from '@angular/core';
import { IRosettaFunctions } from '../Data Models/irosetta-functions';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RosettaService {

  functionsList: IRosettaFunctions[];
  functionValue: any;
  LISTFUNCTIONS_URL = 'http://localhost:52286/api/distancefunction/ListFunctions';
  URLTEMPLATE = 'http://localhost:52286/api/distancefunction/';
  JAROWINKLERNAME = 'JaroWinklerDistanceCalculator';
  urlString: string;

  constructor(private _http: HttpClient) { }

  getFunctionsList(): IRosettaFunctions[] {
    this._http.get(this.LISTFUNCTIONS_URL).subscribe(data => {
      this.functionsList = data['functions'];
    });
    return this.functionsList;
  }

  distanceFunction(functionName: string, stringA: string, stringB: string): Number {
    this.urlString = this.URLTEMPLATE + functionName + '?strA=' + stringA + '&strB=' + stringB;
    this._http.get(this.urlString).subscribe( data => {
      this.functionValue = data;
    });
    return this.functionValue;
  }
}
