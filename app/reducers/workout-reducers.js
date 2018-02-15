//app/reducers/workout-reducers.js
import * as types from '../actions/action-types';

  const initialState = {
    active_workout: {},
  }

  export default function workoutReducers(state = initialState, action = {}) {
    switch (action.type) {
      case types.SET_ACTIVE:
        return Object.assign({}, state, {
          active_workout: action.workout,
        })
      default:
        return state
    }
  }
