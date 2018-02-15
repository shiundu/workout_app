import expect from 'expect';
import reducer from '../../app/reducers/workout-reducers';
import * as types from '../../app/actions/action-types';

const workout = {id:'1',name: 'Full Body'};
describe('workoutReducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      active_workout: {},
    })
  })

  it('should handle SET_ACTIVE', () =>  {
    let action = { type: types.SET_ACTIVE, workout}
    expect(reducer(undefined, action)).toEqual({
      active_workout: action.workout,
    })
  })

})
