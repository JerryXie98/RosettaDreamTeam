import { Action } from '@ngrx/store';

export const EDIT_NAME = '[People] Name';
export const EDIT_COMPANY = '[People] Company';

export class EditName implements Action {
  readonly type = EDIT_NAME;
  constructor(public payload: string) {}
}

export class EditCompany implements Action {
  readonly type = EDIT_COMPANY;
  constructor(public payload: string) {}
}

export type All
  = EditName
  | EditCompany;
