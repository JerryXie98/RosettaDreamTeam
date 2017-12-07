import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRosettaConfig } from '../Models/irosetta-config';

interface Config {
  [key: string]: any;
}

@Injectable()
export class ConfigService {

  POST_URL = 'http://localhost:61899/api/Main/';
  result: any;

  constructor(private _http: HttpClient) { }

  sendDummyConfig() {
    return this._http.post(this.POST_URL, this.createDummyConfig());
  }

  runConfig(config: IRosettaConfig) {
    return this._http.post(this.POST_URL, config);
  }

  createDummyConfig() {
    const config: Config = {
      Options: {},
      Registrations: [ {
        DataStore: 'test',
        LidDomainId: 'standalone',
        RecordReader: {
          Type: 'csv',
          UseColumns: {
            fname: 'FirstName',
            lname: 'LastName',
            by: 'BirthYear',
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
      }],
      // Need to fix this section
      Standardization: {
        SynonymDatabases: {},
        FieldStandardizers: []
      },
      Blocking: {
        BlockingKeys: [
          {
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
          }
        ]
      },
      DataStores: [
        {
          Id: 'test',
          Type: 'Rosetta.Link.Core.LinkDataStoreInProcess',
          Options: {
            StorageProviderType: 'Rosetta.Link.Core.LinkStorageProviderDummy'
          }
        }
      ],
      Matching: {
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
                DistanceFunction: { 'Name': 'JaroWinkler'},
                Threshold: '0.95'
              },
              {
                Name: 'last-name',
                Field: {
                  FieldName: 'LastName',
                  FieldStore: 'Rec'
                },
                DistanceFunction: { 'Name': 'JaroWinkler'},
                Threshold: '0.8'
              }
            ]
          }
        ]
      },
      MidProvider: {
        Type: 'Rosetta.Link.Core.LinkMidProviderInMemory'
      },
      LidStorageProviders: [
        {
          Id: 'RosettaStandalone',
          LidDomainIds: [
            'standalone'
          ],
          Type: 'Rosetta.Link.Core.LinkLidStorageProviderDummy'
        }
      ],
      Diagnostics: {
        Type: 'json',
        Options: {
          BatchSize: 50
        }
      }
    };
    console.log(config);
    return config;
  }
}
