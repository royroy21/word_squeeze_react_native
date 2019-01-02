import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class MainMenu extends React.Component {

  render() {
    const container = {
      flex: 1,
      flexDirection: 'column'
    };
    const titleContainer = {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center'
    };
    const titleStyle = {
      fontSize: 50,
      fontWeight: 'bold'
    };
    const boxContainer = {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    };
    const buttonStyle = {
      backgroundColor: 'white',
      borderWidth: 1,
      borderRadius: 12,
      fontSize: 20,
      fontWeight: 'bold',
      overflow: 'hidden',
      padding: 10,
      margin: 10,
      textAlign: 'center',
      width: 250
    };

    return (
      <View style={container}>
        <View style={titleContainer}>
          <Text style={titleStyle}>WordSqueeze</Text>
        </View>
        <View style={boxContainer}>
          <TouchableOpacity onPress={() => Actions.game()}>
            <Text style={buttonStyle}>START</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.game()}>
            <Text style={buttonStyle}>SANDBOX</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={buttonStyle}>SETTINGS</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
