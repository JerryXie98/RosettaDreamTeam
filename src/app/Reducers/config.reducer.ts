import {IRosettaConfig, Matching, Options, Registration, Standardization} from '../Models/irosetta-config';
import * as ConfigActions from '../Actions/config.actions';

export type Action = ConfigActions.All;

const defaultConfig: IRosettaConfig = {
  Options: { NumberMapper: '' },
  Registrations: [{
    DataStore: '',
    LidDomainId: '',
    RecordReader: { Type: '', UseColumns: {}, BatchSize: -1, Options: {Path: ''}},
    ResultWriter: { Type: '', TargetColumnName: '', IncludeColumnTypes: '', Options: {Path: ''}}
  }],
  Standardization: {
    SynonymDatabases: {dbString: ''},
    FieldStandardizers: [{ Type: '', InputFields: [{FieldName: '', FieldStore: ''}], OutputField: ''}]
  },
  Blocking: {
    BlockingKeys: [{
      Name: '',
      Components: [{ Field: { FieldName: '', FieldStore: ''}, Encoding: '', Options: {}}],
      KeysCreatedByEncoding: -1
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
      DataStores: [''],
      FieldComparers: [{ Name: '', Field: { FieldName: '', FieldStore: ''}, DistanceFunction: {Name: '', Options: {}}, Threshold: -1}],
    }]
  },
  MidProvider: { Type: '' },
  LidStorageProviders: [{ Id: '', LidDomainIds: [''], Type: ''}],
  Diagnostics: { Type: '', Options: {BatchSize: -1}}
};


const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export function configReduce(state: IRosettaConfig = defaultConfig, action: Action) {
  console.log(action.type, state);

  switch (action.type) {
    case ConfigActions.EDIT_OPTIONS:
      return newState(state, { Options: { NumberMapper : action.payload }} );
    case ConfigActions.EDIT_DATASTORES:
      return newState(state, { DataStore: { Id: 'test', Type: 'test', Options: { StorageProviderType: action.payload} }});
    default:
      return state;
  }
}
