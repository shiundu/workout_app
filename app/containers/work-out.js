import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect  } from 'react-redux';
import { ActionCreators } from '../actions';
import { Actions } from 'react-native-router-flux';
import Colors from '../styles/colors';
import WorkoutStyles from '../styles/workout-styles';
import TraineeService from '../services/trainee-service';

import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    CheckBox,
    Button
} from 'react-native';

function mapStateToProps(state) {
  return {
    workOut: state.workoutReducers,
    allworkouts: state.allworkoutReducers,
    traineeState: state.traineeReducers,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

class WorkOut extends Component {
  constructor(){
    super();
  }
  state = {
    new_trainee: undefined,
  }
  _onPress(item){
    let { workOut,updateTrainee, traineeState } = this.props;
    var trainees = TraineeService.updateTrainee(item.id, workOut.active_workout.id, traineeState.trainees)
    updateTrainee(trainees);
  }
  onBack(){
    Actions.AllWorkOuts()
  }
  addTrainee(){
    let { workOut,updateTrainee, traineeState } = this.props;
    console.log("this.state.new_trainee",this.state.new_trainee)
    if(this.state.new_trainee != '' && this.state.new_trainee != undefined){
      var trainees = TraineeService.addTrainee(this.state.new_trainee, workOut.active_workout.id, traineeState.trainees)
      updateTrainee(trainees);
    }

  }
  _keyExtractor = (item, index) => item.id;
  _renderItem = ({item}) => (
    <View style={{flex:1, flexDirection: 'row',justifyContent: 'center', alignItems: 'center', backgroundColor: item.workouts.includes(this.props.workOut.active_workout.id)? Colors.darkslategray:  Colors.gray, padding: 20, borderWidth:2, borderColor: Colors.white}}>
      <View style={WorkoutStyles.workoutTitleView}>
        <Text style={WorkoutStyles.workoutTitleText}>{item.name}</Text>
      </View>
      <TouchableOpacity onPress={()=> this._onPress(item)} style={{flex:1, justifyContent: 'center', alignItems: 'center', padding:10, borderRadius: 5,backgroundColor: item.workouts.includes(this.props.workOut.active_workout.id)? Colors.gray : Colors.darkslategray, }}>
        <Text style={{color: Colors.white}} >{ item.workouts.includes(this.props.workOut.active_workout.id)? 'Check Out': 'Check In' }</Text>
      </TouchableOpacity>
    </View>
  );
  render(){
    let { traineeState, workOut } = this.props;
    console.log(traineeState)
    return (
      <View style={WorkoutStyles.container}>
        <View style={WorkoutStyles.header}>
          <View style={WorkoutStyles.backButton}>
            <Text onPress={()=> this.onBack()}>Back</Text>
          </View>
          <View style={WorkoutStyles.workoutTitle}>
            <Text>{workOut.active_workout.name}</Text>
          </View>
        </View>
        <View style={WorkoutStyles.inputView}>
          <TextInput
            style={WorkoutStyles.textInput}
            onChangeText={(new_trainee) => this.setState({new_trainee})}
            value={this.state.new_trainee}
          />
          <TouchableOpacity onPress={()=> this.addTrainee()} style={WorkoutStyles.addTraineeButton}>
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={traineeState.trainees}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(WorkOut)
