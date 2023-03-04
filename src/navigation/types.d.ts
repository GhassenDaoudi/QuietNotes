import type {NativeStackScreenProps} from '@react-navigation/native-stack';
type MainStackParamList = {
  AllNotes: undefined;
  Note: undefined;
  Settings: undefined;
};

type AllNotesProps = NativeStackScreenProps<MainStackParamList, 'AllNotes'>;
type NoteProps = NativeStackScreenProps<MainStackParamList, 'Note'>;
type SettingsProps = NativeStackScreenProps<MainStackParamList, 'Settings'>;
