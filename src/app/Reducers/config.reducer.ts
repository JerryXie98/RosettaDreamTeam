import {IRosettaConfig, Matching, Options, Registration, Standardization} from '../Models/irosetta-config';
import * as ConfigActions from '../Actions/config.actions';
import {ICustomConfig} from '../Models/custom-config';

export type Action = ConfigActions.All;

const customConfig: ICustomConfig = {
  Options: {},
  Registrations: [{}],
  Standardization: {},
  Blocking: {},
  DataStores: [{}],
  Matching: {},
  MidProvider: {},
  LidStorageProviders: [{}],
  Diagnostics: {}
}

const defaultConfig: IRosettaConfig = {
  Options: { },
  Registrations: [{
    DataStore: '',
    LidDomainId: '',
    RecordReader: { Type: '', UseColumns: {}, BatchSize: -1, Options: {Path: ''}},
    ResultWriter: { Type: '', TargetColumnName: '', IncludeColumnTypes: '', Options: {Path: ''}}
  }],
  Standardization: {
    SynonymDatabases: {},
    FieldStandardizers: []
  },
  Blocking: {
    BlockingKeys: [{
      Name: '',
      Components: [{ Field: { FieldName: '', FieldStore: ''}, Encoding: '', Options: {}}]
    }],
  },
  DataStores: [{
    Id: '',
    Type: '',
    Options: { StorageProviderType: '' }
  }],
  Matching: {
    RecordComparers: [{
      Name: '',
      FieldComparers: [{ Name: '', Field: { FieldName: '', FieldStore: ''}, DistanceFunction: {Name: ''}, Threshold: -1}],
    }]
  },
  MidProvider: { Type: '' },
  LidStorageProviders: [{ Id: '', LidDomainIds: [''], Type: ''}],
  Diagnostics: { Type: '', Options: {BatchSize: -1}}
};


const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export function configReduce(state: ICustomConfig = customConfig, action: Action) {
  console.log(action.type, state);

  switch (action.type) {
    case ConfigActions.EDIT_OPTIONS:
      return newState(state, { Options: action.payload });
    case ConfigActions.EDIT_REGISTRATIONS:
      return newState(state, { Registrations: action.payload });
    case ConfigActions.EDIT_STANDARDIZATIONS:
      return newState(state, { Standardization: action.payload });
    case ConfigActions.EDIT_BLOCKING:
      return newState(state, { Blocking: action.payload });
    case ConfigActions.EDIT_DATASTORES:
      return newState(state, { DataStores: action.payload });
    case ConfigActions.EDIT_MATCHING:
      return newState(state, { Matching: action.payload });
    case ConfigActions.EDIT_MIDPROVIDER:
      return newState(state, { MidProvider: action.payload });
    case ConfigActions.EDIT_LIDSTORAGEPROVIDER:
      return newState(state, { LidStorageProviders: action.payload });
    case ConfigActions.EDIT_DIAGNOSTICS:
      return newState(state, { Diagnostics: action.payload });
    default:
      return state;
  }
}
