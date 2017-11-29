import { IPeople } from '../Models/ipeople';
import * as PeopleActions from '../Actions/people';

export type Action = PeopleActions.All;

const defaultState: IPeople = {
  name: 'Default Name',
  company: 'Default Company',
  email: 'Default Email',
  twitter: 'Default Twitter',
  location: 'Default Location',
  info: 'Default Info',
  image: 'Default Image'
};

const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};


export function peopleReduce(state: IPeople = defaultState, action: Action) {
  console.log(action.type, state);

  switch (action.type) {
    case PeopleActions.EDIT_NAME:
      return newState(state, { name: action.payload });
    case PeopleActions.EDIT_COMPANY:
      return newState(state, { company: action.payload });
    default:
      return state;
  }
}
