import { SET_ORDERS } from './actionTypes';

export const setOrders = orders => ({
  type: SET_ORDERS,
  payload: { orders }
});