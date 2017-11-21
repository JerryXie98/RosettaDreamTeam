import { Injectable } from '@angular/core';
import { IRosettaFunctions } from '../Data Models/irosetta-functions';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RosettaService {

  LISTFUNCTIONS_URL = 'http://localhost:61899/api/distancefunction/ListFunctions';

  constructor(private _http: HttpClient) { }

  getFunctionsList() {
    return this._http.get<IRosettaFunctions[]>(this.LISTFUNCTIONS_URL);
  }

  distanceFunction(url: string) {
    return this._http.get(url);
  }
}
