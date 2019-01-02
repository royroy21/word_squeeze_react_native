import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Game from './components/game/game';
import MainMenu from './components/mainMenu/mainMenu';
import SplashScreen from './components/splashScreen';


export default class App extends React.Component {

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="game" component={Game} title="game"/>
          <Scene key="mainMenu" component={MainMenu} title="mainMenu"/>
          <Scene key="SplashScreen" component={SplashScreen} title="SplashScreen" initial/>
        </Scene>
      </Router>
    )
  }
}
