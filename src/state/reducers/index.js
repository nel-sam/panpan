import { combineReducers } from 'redux';
import planReducer from './planReducer';
import doughReducer from './doughReducer';

export default combineReducers({
  doughs: doughReducer,
  plan: planReducer,
});
