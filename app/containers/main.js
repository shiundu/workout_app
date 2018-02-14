import React, { Component } from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '../reducers';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });
function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      //loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}
const store = configureStore({});

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
