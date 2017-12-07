import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppState } from '../../../State/config-state';
import { Store } from '@ngrx/store';
import {Matching} from '../../../Models/irosetta-config';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MatchingComponent implements OnInit {

  MatchingOutput: Matching = {
    RecordComparers: [{
      Name: '',
      FieldComparers: [{
        Name: '',
        Field: { FieldName: '', FieldStore: ''},
        DistanceFunction: {
          Name: ''
          },
        Threshold: -1
      }]
    }]
  };

  constructor(private _store: Store<AppState>) {
    this._store.select('config');
  }

  ngOnInit() { }

}
