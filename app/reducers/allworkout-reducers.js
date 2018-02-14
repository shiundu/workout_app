import createReducer from '../utils/createReducer'
import * as types from '../actions/action-types';

export const allworkoutReducers = createReducer({}, {
   [types.INITIALIZE_ALL_WORK_OUT](state, action) {
     return Object.assign({}, state, {
     })
   },
  });
