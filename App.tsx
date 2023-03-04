import React from 'react';
import AppContainer from './src/components/AppContainer';
import MainStack from './src/navigation/MainStack';
import useNotes from './src/store/useNotes';
//useNotes.getState().clear();
useNotes.getState().load();
export default () => {
  return (
    <AppContainer>
      <MainStack />
    </AppContainer>
  );
};
