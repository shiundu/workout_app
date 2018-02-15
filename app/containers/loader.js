import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect  } from 'react-redux';
import { ActionCreators } from '../actions';
import { Actions } from 'react-native-router-flux';
import GeneralStyles from '../styles/general-styles';
import SocketIOClient from 'socket.io-client';
import { View, Text } from 'react-native';
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


class Loader extends Component {
  constructor(props) {
    super(props);
    this.socket = SocketIOClient('http://localhost:3000');
  }
  componentWillMount(){
    let { setTrainees, initializeAllworkouts } = this.props;
    this.socket.on('workouts', function(workouts) {
      initializeAllworkouts(workouts);
    });

    this.socket.on('trainees', function(trainees) {
      setTrainees(trainees);
    });
  }
  componentDidMount(){
    Actions.AllWorkOuts()
  }
  render() {
    let { allworkouts, traineeState } = this.props
    return (
      <View style={GeneralStyles.loaderContainer}>
        <Text style={GeneralStyles.loaderText}>gritspot</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Loader)
