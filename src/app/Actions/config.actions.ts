import { Action } from '@ngrx/store';
import {
  DataStore, Diagnostics, LidStorageProvider, Matching, MidProvider, Options, Registration,
  Standardization
} from '../Models/irosetta-config';

export const EDIT_OPTIONS = '[Config] Update Options';
export const EDIT_REGISTRATIONS = '[Config] Update Options';
export const EDIT_STANDARDIZATIONS = '[Config] Update Standardization';
export const EDIT_BLOCKING = '[Config] Update Blocking';
export const EDIT_DATASTORES = '[Config] Update Datastores';
export const EDIT_MATCHING = '[Config] Update Matching';
export const EDIT_MIDPROVIDER = '[Config] Update MidProvider';
export const EDIT_LIDSTORAGEPROVIDER = '[Config] Update LidStorage Provider';
export const EDIT_DIAGNOSTICS = '[Config] Update Diagnostics';

export class EditOptions implements Action {
  readonly type = EDIT_OPTIONS;
  constructor(public payload: Options) {}
}

export class EditRegistrations implements Action {
  readonly type = EDIT_REGISTRATIONS;
  constructor(public payload: Registration) {}
}

export class EditStandardizations implements Action {
  readonly type = EDIT_STANDARDIZATIONS;
  constructor(public payload: Standardization) {}
}

export class EditBlocking implements  Action {
  readonly  type = EDIT_BLOCKING;
  constructor(public payload: Standardization) {}
}

export class EditDataStores implements Action {
  readonly type = EDIT_DATASTORES;
  constructor(public payload: DataStore) {}
}

export class EditMatching implements  Action {
  readonly  type = EDIT_MATCHING;
  constructor(public payload: Matching) {}
}

export class EditMidProvider implements  Action {
  readonly  type = EDIT_MIDPROVIDER;
  constructor(public payload: MidProvider) {}
}

export class EditLidStorageProvider implements Action {
  readonly  type = EDIT_LIDSTORAGEPROVIDER;
  constructor(public payload: LidStorageProvider) {}
}

export class EditDiagnostics implements Action {
  readonly type = EDIT_DIAGNOSTICS;
  constructor(public payload: Diagnostics) {}
}

export type All
  = EditOptions
  | EditRegistrations
  | EditStandardizations
  | EditBlocking
  | EditDataStores
  | EditMatching
  | EditMidProvider
  | EditLidStorageProvider
  | EditDiagnostics;
