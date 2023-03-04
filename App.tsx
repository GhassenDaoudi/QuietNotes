import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainStack from './src/navigation/MainStack';
import useNotes from './src/store/useNotes';
//useNotes.getState().clear();
useNotes.getState().load();
export default () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
