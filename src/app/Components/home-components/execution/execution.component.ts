import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppState } from '../../../State/config-state';
import { Store } from '@ngrx/store';
import {
  DataStore, Diagnostics, ICustomConfig, LidStorageProvider, Matching, MidProvider, Options,
  Registration
} from '../../../Models/custom-config';
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
  ConfigTemplate$: Observable<ICustomConfig>;
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

  dummyDataStores: DataStore[] = [{
    Id: 'test',
    Type: 'Rosetta.Link.Core.LinkDataStoreInProcess',
    Options: {
      StorageProviderType: 'Rosetta.Link.Core.LinkStorageProviderDummy'
    }
  }];

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
    this._store.dispatch(new ConfigActions.EditDataStores(this.dummyDataStores));
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
