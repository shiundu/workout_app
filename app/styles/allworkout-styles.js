import { StyleSheet} from 'react-native';
import Colors from './colors';
var Dimensions = require('Dimensions');

var { width, height } = Dimensions.get('window');

var AllWorkOutStyles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: Colors.darkslategray
  },
  workutContent:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth:2,
    height: height/3,
    borderColor: Colors.white
  },
  workOutView: {
    flex:1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  workoutText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 30,
  },

});

module.exports = AllWorkOutStyles;
