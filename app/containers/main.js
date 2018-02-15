import React, { Component } from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, combineReducers  } from 'redux';
import thunk from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
import * as reducers from '../reducers/index';
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NetInfo
} from 'react-native';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default Main;
