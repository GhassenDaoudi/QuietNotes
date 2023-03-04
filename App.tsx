import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainStack from './src/navigation/MainStack';

export default () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
