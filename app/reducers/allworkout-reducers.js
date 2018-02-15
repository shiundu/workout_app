//app/reducers/allworkout-reducers.js

import * as types from '../actions/action-types';

const initialState = {
  workouts: []
}

export default function allworkoutReducers(state = initialState, action = {}) {
  switch (action.type) {
    case types.INITIALIZE_ALL_WORK_OUT:
      let { currentUser } = action
      return Object.assign({}, state, {
        workouts: action.workouts,
      })
    default:
      return state
  }
}
