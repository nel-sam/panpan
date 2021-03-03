import { SET_DOUGHS } from './../actions/actionTypes';

const initialState = [];

const doughs = (state = initialState, action) => {
  switch(action.type) {
    case SET_DOUGHS: {
      return [ ...action.payload.doughs ];
    }
    default: {
      return state;
    }
  }
};

export default doughs;