import expect from 'expect';
import reducer from '../../app/reducers/allworkout-reducers';
import * as types from '../../app/actions/action-types';

const workouts = [];
describe('allworkoutReducers', () => {

  it('should handle INITIALIZE_ALL_WORK_OUT', () => {
    let action = { type: types.INITIALIZE_ALL_WORK_OUT, workouts}
    expect(reducer(undefined, action)).toEqual({
      workouts: action.workouts,
    })
  })

})
