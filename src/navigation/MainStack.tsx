import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Acknowledgement from '../screens/Acknowledgement/Acknowledgement';
import AllNotes from '../screens/AllNotes/AllNotes';
import Note from '../screens/Note/Note';
import Settings from '../screens/Settings/Settings';
import {MainStackParamList} from './types';

const Stack = createNativeStackNavigator<MainStackParamList>();

export default () => {
  return (
    <Stack.Navigator initialRouteName="AllNotes">
      <Stack.Screen name="AllNotes" component={AllNotes} />
      <Stack.Screen name="Note" component={Note} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Acknowledgement" component={Acknowledgement} />
    </Stack.Navigator>
  );
};
