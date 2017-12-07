import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppState } from '../../../State/config-state';
import { Store } from '@ngrx/store';
import { Matching } from '../../../Models/irosetta-config';
import * as ConfigActions from '../../../Actions/config.actions';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MatchingComponent implements OnInit {

  dummyMatching: Matching = {
    RecordComparers: [
      {
        Name: 'FirstandLastNames',
        FieldComparers: [
          {
            Name: 'first-name',
            Field: {
              FieldName: 'FirstName',
              FieldStore: 'Rec'
            },
            DistanceFunction: { Name: 'JaroWinkler' },
            Threshold: 0.95
          },
          {
            Name: 'last-name',
            Field: {
              FieldName: 'LastName',
              FieldStore: 'Rec'
            },
            DistanceFunction: { Name: 'JaroWinkler' },
            Threshold: 0.8
          }
        ]
      }
    ]
  };

  constructor(private _store: Store<AppState>) {
    this._store.select('config');
  }

  ngOnInit() { }

  dummyMatch() {
    this._store.dispatch(new ConfigActions.EditMatching(this.dummyMatching));
  }

}
