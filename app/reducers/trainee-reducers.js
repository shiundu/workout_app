//app/reducers/trainee-reducers.js
import * as types from '../actions/action-types';

const initialState = {
  trainees: [],
}

export default function traineeReducers(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_TRAINEES:
      return Object.assign({}, state, {
        trainees: action.trainees,
      })
    case types.UPDATE_TRAINEE:
      let { currentUser } = action
      return Object.assign({}, state, {
        trainees: action.trainees,
      })
    default:
      return state
  }
}
