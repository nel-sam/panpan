import { SET_PLAN } from './../actions/actionTypes';

const initialState = [];

const plan = (state = initialState, action) => {
  switch(action.type) {
    case SET_PLAN: {
      return action.payload.plan;
    }
    default: {
      return state;
    }
  }
};

export default plan;