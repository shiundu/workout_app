import * as types from './action-types';

export function initializeAllworkouts(workouts) {
  return {
    type: types.INITIALIZE_ALL_WORK_OUT,
    workouts
  };
}
