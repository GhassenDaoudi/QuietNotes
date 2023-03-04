import {create} from 'zustand';
import {storage} from '../lib/storage';
import getRandomId from '../lib/getRandomId';
const STORAGE_KEY = 'NOTES';

interface NotesState {
  notes: INote[];
  load: () => void;
  add: (title: string, content: string) => void;
  clear: () => void;
}
export default create<NotesState>((set, get) => ({
  notes: [],

  load() {
    const tmp = storage.getString(STORAGE_KEY);
    if (!tmp) {
      set({notes: []});
      return;
    }
    set({notes: JSON.parse(tmp) as INote[]});
  },
  add(title, content) {
    const now = new Date();
    const newNotes: INote[] = [
      {title, content, createdAt: '' + now.getTime(), id: getRandomId()},
      ...get().notes,
    ];
    set({notes: newNotes});
    storage.set(STORAGE_KEY, JSON.stringify(newNotes));
  },
  clear() {
    set({notes: []});
    storage.delete(STORAGE_KEY);
  },
}));
