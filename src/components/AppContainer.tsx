import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
type Props = {
  children: React.ReactNode;
};
export default (props: Props) => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>{props.children}</NativeBaseProvider>
    </NavigationContainer>
  );
};
