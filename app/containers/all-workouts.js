import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect  } from 'react-redux';
import { ActionCreators } from '../actions';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';
import Colors from '../styles/colors';
import {
    View,
    Text,
    TextInput,
} from 'react-native';

function mapStateToProps(state) {
  return {
    allworkouts: state.allworkoutReducers,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

class AllWorkOuts extends Component {
  constructor(){
    super();
  }

  render(){
    let { currentUser } = this.props;
    return (
          <View>
            <Text>All Work Out</Text>
          </View>
      );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AllWorkOuts)
