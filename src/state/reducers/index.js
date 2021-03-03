import { combineReducers } from 'redux';
import planReducer from './planReducer';
import doughReducer from './doughReducer';
import orderReducer from './orderReducer';

export default combineReducers({
  doughs: doughReducer,
  plan: planReducer,
  orders: orderReducer,
});
