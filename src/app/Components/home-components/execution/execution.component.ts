import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppState } from '../../../State/config-state';
import { Store } from '@ngrx/store';
import {
  Blocking, DataStore, Diagnostics, IRosettaConfig, LidStorageProvider, Matching, MidProvider, Options,
  Registration
} from '../../../Models/irosetta-config';
import {Observable} from 'rxjs/Observable';
import * as ConfigActions from '../../../Actions/config.actions';
import {ConfigService} from '../../../Services/config.service';

@Component({
  selector: 'app-execution',
  templateUrl: './execution.component.html',
  styleUrls: ['./execution.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExecutionComponent implements OnInit {
  ConfigTemplate$: Observable<IRosettaConfig>;
  testOutput: any;

  dummyRegistrations: Registration[] = [{
    DataStore: 'test',
    LidDomainId: 'standalone',
    RecordReader: {
      Type: 'csv',
      UseColumns: {
        fname: 'FirstName',
        lname: 'LastName',
        by: 'BirthYear',
        bm: 'BirthMonth',
        bd: 'BirthDay'
      },
      BatchSize: 2400,
      Options: {
        Path: 'C:\\Dev\\TestConfig\\RLdata500.csv'
      }
    },
    ResultWriter: {
      Type: 'csv',
      TargetColumnName: 'LID',
      IncludeColumnTypes: 'All',
      Options: {
        Path: 'C:\\Dev\\TestConfig\\output.csv'
      }
    }
  }];

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

  dummyDataStores: DataStore[] = [{
    Id: 'test',
    Type: 'Rosetta.Link.Core.LinkDataStoreInProcess',
    Options: {
      StorageProviderType: 'Rosetta.Link.Core.LinkStorageProviderDummy'
    }
  }];

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

  dummyMidProvider: MidProvider = {
    Type: 'Rosetta.Link.Core.LinkMidProviderInMemory'
  };

  dummyLidStorageProvider: LidStorageProvider[] = [{
      Id: 'RosettaStandalone',
      LidDomainIds: [
        'standalone'
      ],
      Type: 'Rosetta.Link.Core.LinkLidStorageProviderDummy'
  }];

  dummyDiagnostics: Diagnostics = {
    Type: 'json',
    Options: {
      BatchSize: 50
    }
  };

  constructor(private _configService: ConfigService, private _store: Store<AppState>) {
    this.ConfigTemplate$ = this._store.select('config');
  }

  ngOnInit() {
  }

  dummySetup() {
    this._store.dispatch(new ConfigActions.EditRegistrations(this.dummyRegistrations));
    this._store.dispatch(new ConfigActions.EditBlocking(this.dummyBlocking));
    this._store.dispatch(new ConfigActions.EditDataStores(this.dummyDataStores));
    this._store.dispatch(new ConfigActions.EditMatching(this.dummyMatching));
    this._store.dispatch(new ConfigActions.EditMidProvider(this.dummyMidProvider));
    this._store.dispatch(new ConfigActions.EditLidStorageProvider(this.dummyLidStorageProvider));
    this._store.dispatch(new ConfigActions.EditDiagnostics(this.dummyDiagnostics));
  }

  dummyExecute() {
    this.ConfigTemplate$.subscribe(data => {
      console.log(data);
      this._configService.runConfig(data).subscribe(val => console.log(val));
    });
  }
}
