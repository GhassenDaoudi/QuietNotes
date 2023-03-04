import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AllNotes from '../features/AllNotes/AllNotes';
import Note from '../features/Note/Note';
import Settings from '../features/Settings/Settings';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName="AllNotes">
      <Stack.Screen name="AllNotes" component={AllNotes} />
      <Stack.Screen name="Note" component={Note} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};
