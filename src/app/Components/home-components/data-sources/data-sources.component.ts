import { Component, OnInit } from '@angular/core';
import {AppState} from '../../../State/config-state';
import { Store } from '@ngrx/store';
import { IRosettaConfig } from '../../../Models/irosetta-config';
import { Observable } from 'rxjs/Observable';
import * as ConfigActions from '../../../Actions/config.actions';

@Component({
  selector: 'app-data-sources',
  templateUrl: './data-sources.component.html',
  styleUrls: ['./data-sources.component.css']
})
export class DataSourcesComponent implements OnInit {
  tempOutput: string;

  config$: Observable<IRosettaConfig>;

  constructor(private _store: Store<AppState>) {
    this._store.select('config');
}

  ngOnInit() {
  }

  optionChange() {
    this._store.dispatch(new ConfigActions.EditOptions('test'));
  }

  datastoreChange() {
    this._store.dispatch(new ConfigActions.EditDataStores('bleh'));
  }

}
