import { ref } from "vue";

type Note = {
  id: string;
  author: string;
  content: string;
  image: string;
  category: string;
  status: string;
};

type InitialNote = {
  [index: string]: string;
};

const noteCollection = ref<Note[]>([]);
const initialNoteCollection = ref<InitialNote>({});

const getData = async () => {
  await fetch("http://localhost:3000/note/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      noteCollection.value = data;

      initialNoteCollection.value = noteCollection.value.reduce((acc, note) => {
        acc[note.id] = note.content.substring(0, 200);
        return acc;
      }, {} as Record<string, string>);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getNotes = () => {
  return { noteCollection, initialNoteCollection, getData };
};

export default getNotes;
