import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Blocking } from '../../../Models/custom-config';
import * as ConfigActions from '../../../Actions/config.actions';
import { AppState } from '../../../State/config-state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-blocking',
  templateUrl: './blocking.component.html',
  styleUrls: ['./blocking.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlockingComponent implements OnInit {
  dummyBlocking: Blocking = {
    BlockingKeys: [{
      Name: 'NameBlock',
      Components: [
        {
          Field: {
            FieldName: 'FirstName',
            FieldStore: 'Rec'
          },
          Encoding: 'substring',
          Options: {
            start: '0',
            length: '2'
          }
        }
      ]
    }]
  };

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
  }

  dummyBlock() {
    this._store.dispatch(new ConfigActions.EditBlocking(this.dummyBlocking));
  }

}
