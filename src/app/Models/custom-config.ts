export interface ICustomConfig {
  Options: Options;
  Registrations: Registration[];
  Standardization: Standardization;
  Blocking: Blocking;
  DataStores: DataStore[];
  Matching: Matching;
  MidProvider: MidProvider;
  LidStorageProviders: LidStorageProvider[];
  Diagnostics: Diagnostics;
}

export interface Options {
  [key: string]: any;
}

export interface Registration {
  [key: string]: any;
}

export interface Standardization {
  [key: string]: any;
}

export interface Blocking {
  [key: string]: any;
}

export interface DataStore {
  [key: string]: any;
}

export interface Matching {
  [key: string]: any;
}

export interface MidProvider {
  [key: string]: any;
}

export interface LidStorageProvider {
  [key: string]: any;
}

export interface Diagnostics {
  [key: string]: any;
}
