import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Blocking } from '../../../Models/custom-config';

@Component({
  selector: 'app-blocking',
  templateUrl: './blocking.component.html',
  styleUrls: ['./blocking.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlockingComponent implements OnInit {
  dummyBlock: Blocking = {
    BlockingKeys: [{
      Name: 'NameBlock',
      Components: [{
        Field: {
          FieldName: 'First Name',
          FieldStore: 'Rec'
        },
        Encoding: 'substring',
        Options: {
          start: 0,
          length: 2
        }
      }]
    }]
  };

  constructor() { }

  ngOnInit() {
  }

}
