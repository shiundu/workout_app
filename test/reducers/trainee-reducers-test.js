import expect from 'expect';
import reducer from '../../app/reducers/trainee-reducers';
import * as types from '../../app/actions/action-types';

const trainees = [{id: '1', name:'Test User', workouts: []}];
describe('traineeReducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      trainees: [],
    })
  })

  it('should handle SET_TRAINEES', () =>  {
    let action = { type: types.SET_TRAINEES, trainees}
    expect(reducer(undefined, action)).toEqual({
      trainees: action.trainees,
    })
  })

  it('should handle UPDATE_TRAINEE', () =>  {
    let action = { type: types.UPDATE_TRAINEE, trainees}
    expect(reducer(undefined, action)).toEqual({
      trainees: action.trainees,
    })
  })

})
