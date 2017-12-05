import { Component, OnInit, Inject } from '@angular/core';
import {AppState} from '../../../State/config-state';
import { Store } from '@ngrx/store';
import { IRosettaConfig } from '../../../Models/irosetta-config';
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
  dataSourceTitle = "Data Source Title";
  lidDomainList = [
    {value: 'select', viewValue: 'Select'}
  ];
  
  lidDomainChosen: string;

  connectionProviders = [
    {value: 'SQL-0', viewValue: 'SQL Server'},
    {value: 'Oracle-1', viewValue: 'Oracle'},
    {value: 'CSV-2', viewValue: 'CSV'}
  ];

  config$: Observable<IRosettaConfig>;

  constructor(private _store: Store<AppState>, public dialog: MatDialog) {
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
    this.data.lidDomainList.push({value: addLidDomain, viewValue: addLidDomain})
    this.dialogRef.close();
  }

}