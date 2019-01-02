import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import FadeInView from './animations/fadeIn';

export default class SplashScreen extends React.Component {

  componentDidMount(){
    this.timeoutHandle = setTimeout(()=>{
      Actions.mainMenu()
    }, 6000);
  }

  componentWillUnmount(){
    clearTimeout(this.timeoutHandle);
  }

  render() {
    const containerStyle = {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    };
    const titleStyle = {
      fontSize: 50,
      fontWeight: 'bold',
      textAlign: 'left',
      padding: 5
    };
    const title = "Welcome\nto the\nWordSqueeze";

    return (
      <TouchableOpacity
        style={containerStyle}
        onPress={() => Actions.mainMenu()}>
        <FadeInView>
          <Text style={titleStyle}>{title}</Text>
        </FadeInView>
      </TouchableOpacity>
    )
  }
}
