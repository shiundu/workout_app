import expect from 'expect'
import TraineeService from '../../app/services/trainee-service'


describe('TraineeService', () => {
  let trainees = [
    {
      id: '1',
      name: "Test User 1",
      workouts: []
    },
    {
      id: '2',
      name: "Test User 2",
      workouts: []
    }
  ];
  let first_workout_id =  '3';
  describe('updateTrainee', () => {
    let user_id = '2';
    it('pushes the workout_id into trainees\' workouts[]', () => {
      let result = TraineeService.updateTrainee(user_id, first_workout_id, trainees);
      let expectedOutcome = [
            {
              id: '1',
              name: "Test User 1",
              workouts: []
            },
            {
              id: '2',
              name: "Test User 2",
              workouts: [first_workout_id]
            }
          ]
      expect(result).toEqual(expectedOutcome)
  	});
  });

  describe('updateTrainee', () => {
    it('Add trainee to trainee[] and the workout_id into the new trainees\' workouts[]', () => {
    let name = 'Test User 3';
    let workout_id =  '1';
    let result = TraineeService.addTrainee(name, workout_id, trainees);
    let expectedOutcome = [
          {
            id: '1',
            name: "Test User 1",
            workouts: []
          },
          {
            id: '2',
            name: "Test User 2",
            workouts: [first_workout_id]
          },
          {
            id: '3',
            name: "Test User 3",
            workouts: ['1']
          }
        ]
    expect(result).toEqual(expectedOutcome)
  	});
  });
})
