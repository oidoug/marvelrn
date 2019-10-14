/**
 * Moviern React Native App
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native';

// Routes component controls all screens that can be pushed into the screen stack.
import Routes from './Routes';
import { main } from './components/Main.styles';

console.disableYellowBox = true;

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='rgba(1, 1, 1, 0.5)'/>
      <Routes />
    </>
  );
};

export default App;
