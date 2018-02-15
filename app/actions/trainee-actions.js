import * as types from './action-types';

export function setTrainees(trainees) {
  return {
    type: types.SET_TRAINEES,
    trainees
  };
}

export function updateTrainee(trainees) {
  return {
    type: types.UPDATE_TRAINEE,
    trainees
  };
}
