import { StyleSheet} from 'react-native';
import Colors from './colors';
var Dimensions = require('Dimensions');

var { width, height } = Dimensions.get('window');

var GeneralStyles = StyleSheet.create({
  loaderContainer: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  loaderText: {
    fontWeight: 'bold',
    fontSize: 25
  }
});

module.exports = GeneralStyles;
