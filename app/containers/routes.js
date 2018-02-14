import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect  } from 'react-redux';
import { ActionCreators } from '../actions';
import {Actions, Scene, Router} from 'react-native-router-flux';


import AllWorkOuts from './all-workouts';
import WorkOut from './work-out';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="AllWorkOuts" component={AllWorkOuts} hideTabBar hideNavBar title="AllWorkOuts" />
    <Scene key="WorkOut" component={WorkOut} hideTabBar hideNavBar title="WorkOut" />
  </Scene>
);

class Routes extends Component {
  render() {
    return <Router scenes={scenes}/>
  }
}

export default Routes;
