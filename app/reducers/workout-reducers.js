import createReducer from '../utils/createReducer'
import * as types from '../actions/action-types';

export const workoutReducers = createReducer({}, {
   [types.INITIALIZE_WORK_OUT](state, action) {
     return Object.assign({}, state, {
     })
   },
  });
