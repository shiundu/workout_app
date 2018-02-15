//app/services/trainee-services.js

TraineeService = {
  //Add and remove traines to a workout
  updateTrainee: function(user_id, workout_id, trainees){
    var trainees = trainees.map(trainee => {
        var workouts = trainee.workouts;
        if(user_id == trainee.id && workouts.includes(workout_id) ){
          for(var i = workouts.length - 1; i >= 0; i--) {
             if(workouts[i] === workout_id) {
                workouts.splice(i, 1);
             }
         }
         trainee.workouts = workouts;
         return trainee;
        }
        else if(user_id == trainee.id){
          trainee.workouts.push(workout_id)
          return trainee;
        }
        else {
          return trainee;
        }
    });
    return trainees;
  },

  //Add new trainees to the trainees array
  addTrainee: function(name, workout_id, trainees){
    var id = (trainees.length+1).toString();
    trainee = {
      id: id,
      name: name,
      workouts: [workout_id],
    }
    trainees.push(trainee);
    return trainees;
  }
}

module.exports = TraineeService;
