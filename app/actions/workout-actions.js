import * as types from './action-types';

export function initializeWorkout() {
  return {
    type: types.INITIALIZE_WORK_OUT,
  };
}

export function setActive(workout) {
  return {
    type: types.SET_ACTIVE,
    workout
  };
}
