import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect  } from 'react-redux';
import { ActionCreators } from '../actions';
import { Actions } from 'react-native-router-flux';
import AllWorkOutStyles from '../styles/allworkout-styles';
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity
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
  _onPress =  (item)=>{
    this.props.setActive(item);
    Actions.WorkOut();
  }
  _keyExtractor = (item, index) => item.id;
  _renderItem = ({item}) => (

    <TouchableOpacity onPress={() => this._onPress(item)} style={AllWorkOutStyles.workutContent}>
      <View style={AllWorkOutStyles.workOutView}>
        <Text style={AllWorkOutStyles.workoutText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
  render(){
    let { allworkouts } = this.props;
    return (
      <View style={AllWorkOutStyles.container}>
        <FlatList
          data={allworkouts.workouts}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AllWorkOuts)
