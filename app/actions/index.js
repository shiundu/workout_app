import * as allworkoutActions from './allworkout-actions';
import * as workoutActions from './workout-actions';
import * as traineeActions from './trainee-actions';

export const ActionCreators = Object.assign({},
  allworkoutActions,
  workoutActions,
  traineeActions,
);
