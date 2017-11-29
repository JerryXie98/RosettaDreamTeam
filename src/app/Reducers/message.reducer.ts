import { Action } from '@ngrx/store';

export function testReduce(state: string = 'Hello World', action: Action) {
  switch (action.type) {
    case 'SPANISH':
      return state = 'Hello';
    case 'FRENCH':
      return state = 'Bonjour';
    default:
      return state;
  }
}
