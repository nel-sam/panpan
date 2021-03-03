import { SET_PLAN } from './actionTypes';

export const setPlan = plan => ({
  type: SET_PLAN,
  payload: {
    plan
  }
});
