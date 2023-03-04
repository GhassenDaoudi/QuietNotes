import React from 'react';

import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import useNotes from '../../store/useNotes';
export default () => {
  const notes = useNotes(state => state.notes);
  const add = useNotes(state => state.add);
  const onPressAddBtn = () => {
    add('hello', 'aaaa');
  };
  return (
    <View>
      <TouchableOpacity onPress={onPressAddBtn} style={{padding: 10}}>
        <Text>Add</Text>
      </TouchableOpacity>
      <ScrollView>
        {notes.map(note => (
          <Text key={note.id}>
            {note.id}:{note.title}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};
