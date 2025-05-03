import { ref } from "vue";

const header = ref("");
const content = ref("");

const getTargetNote = async (id: string) => {
  await fetch("http://localhost:3000/note/" + id)
    .then((response) => response.json())
    .then((data) => {
      header.value = data.header;
      content.value = data.content;
    })
    .catch((err) => console.error(err.message));
};

const getExpendNote = () => {
  return { header, content, getTargetNote };
};

export default getExpendNote;
