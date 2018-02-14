import { combineReducers } from 'redux';

import * as allworkoutReducers from './allworkout-reducers';
import * as workoutReducers from './workout-reducers';

export default combineReducers(
  Object.assign(
    allworkoutReducers,
    workoutReducers,
  )
);
