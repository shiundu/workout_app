import { StyleSheet} from 'react-native';
import Colors from './colors';
var Dimensions = require('Dimensions');

var { width, height } = Dimensions.get('window');

var WorkoutStyles = StyleSheet.create({
  container: {
    flex:1,
  },
  header: {
    flex:0.2,
    backgroundColor: 'lightgreen'
  },
  backButton: {
    padding: 10,
    marginTop: 15
  },
  workoutTitle:{
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView: {
    flex:0.05,
    flexDirection: 'row',
    padding:1
  },
  textInput: {
    flex:8,
    height: 25,
    borderColor: 'gray',
    borderWidth: 1
  },
  addTraineeButton: {
    flex:2,
    backgroundColor: Colors.navajowhite,
    justifyContent: 'center',
    alignItems: 'center',
    padding:1
  },
  workoutView: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: item.workouts.includes(this.props.workOut.active_workout.id)? Colors.darkslategray:  Colors.gray,
    padding: 20,
    borderWidth:2,
    borderColor: Colors.white
  },
  workoutTitleView: {
    flex:2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  workoutTitleText: {
    color: Colors.white,
    fontWeight: 'bold'
  },
  workoutViewButton: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
    borderRadius: 5,
  }

});

module.exports = WorkoutStyles;
