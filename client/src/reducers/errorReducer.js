import { GET_ERRORS } from '../actions/types';

const initialState = {};

// different actions (specified with types) are dispatched to this reducer
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}