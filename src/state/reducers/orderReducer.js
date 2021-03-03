import { SET_ORDERS } from './../actions/actionTypes';

const initialState = [];

const orders = (state = initialState, action) => {
  switch(action.type) {
    case SET_ORDERS: {
      return [ ...action.payload.orders ];
    }
    default: {
      return state;
    }
  }
};

export default orders;