import { Component, OnInit, Inject } from '@angular/core';
import {AppState} from '../../../State/config-state';
import { Store } from '@ngrx/store';
import { IRosettaConfig, Diagnostics, Registration } from '../../../Models/irosetta-config';
import { Observable } from 'rxjs/Observable';
import * as ConfigActions from '../../../Actions/config.actions';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-data-sources',
  templateUrl: './data-sources.component.html',
  styleUrls: ['./data-sources.component.css']
})
export class DataSourcesComponent implements OnInit {
  tempOutput: string;
  dataSourceList = [
    'Data Source Title'
  ];
  colors = [
    {value: 'red', viewValue: 'Red'},
    {value: 'blue', viewValue: 'Blue'},
    {value: 'green', viewValue: 'Green'}
  ];
  lidDomainList = [
    {value: 'select', viewValue: 'Select'}
  ];
  lidDomainChosen: string;
  dummyDiagnostics: Diagnostics = {
    Type: 'json',
    Options: {
      BatchSize: 50
    }
  };

  connectionProviders = [
    {value: 'SQL Server', viewValue: 'SQL Server'},
    {value: 'Oracle', viewValue: 'Oracle'},
    {value: 'CSV', viewValue: 'CSV'}
  ];

  config$: Observable<IRosettaConfig>;

  constructor(private _store: Store<AppState>, public dialog: MatDialog) {
    this._store.select('config');
}

  ngOnInit() {
  }

  AddDataSource(addDataSource: string) {
    this.dataSourceList.push(addDataSource);
  }

  dummydiagnosticsSet() {
    this._store.dispatch(new ConfigActions.EditDiagnostics(this.dummyDiagnostics));
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(LidDomainDialog, {
      height: '400px',
      width: '600px',
      data: { lidDomain: this.lidDomainChosen, lidDomainList: this.lidDomainList}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.lidDomainChosen = result;
    });
  }
}

@Component({
  selector: 'lid-domain-dialog',
  templateUrl: './lid-domain-dialog.html',
  styleUrls: ['./data-sources.component.css'],
})
export class LidDomainDialog {
  providerList = [
    {value: 'Dummy-0', viewValue: 'Link Dummy Storage Provider'},
    {value: 'SQL-1', viewValue: 'SQL Server Storage Provider'},
    {value: 'Oracle-2', viewValue: 'Oracle Storage Provider'},
    {value: 'NoSQL-2', viewValue: 'NoSQL Storage Provider'}
  ];

  constructor(
    public dialogRef: MatDialogRef<LidDomainDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  AddLidDomain(addLidDomain: object) {
    this.data.lidDomainList.push({value: addLidDomain, viewValue: addLidDomain});
    this.dialogRef.close();
  }

}
