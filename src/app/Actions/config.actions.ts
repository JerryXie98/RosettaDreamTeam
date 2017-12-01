import { Action } from '@ngrx/store';

export const EDIT_OPTIONS = '[Config] Options';
export const EDIT_DATASTORES = '[Config] Datastores';

export class EditOptions implements Action {
  readonly type = EDIT_OPTIONS;
  constructor(public payload: string) {}
}

export class EditDataStores implements Action {
  readonly type = EDIT_DATASTORES;
  constructor(public payload: string) {}
}

export type All
  = EditOptions
  | EditDataStores;
