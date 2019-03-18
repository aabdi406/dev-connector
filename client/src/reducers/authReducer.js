import { TEST_DISPATCH } from '../actions/types';

const initialState = {
  isAuthenticated: false,       // user isn't logged
  user: {}                      // object of the user when they are logged in
}

// different actions (specified with types) are dispatched to this reducer
export default function (state = initialState, action) {
  switch (action.type) {
    case TEST_DISPATCH:
      return {
        ...state,               // include initial state into the return
        user: action.payload    // this is the user data
      }
    default:
      return state;
  }
}