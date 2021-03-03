import { SET_DOUGHS } from './actionTypes';

export const setDoughs = doughs => ({
  type: SET_DOUGHS,
  payload: { doughs }
});