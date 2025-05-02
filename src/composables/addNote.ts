const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

const formattedDate = `${year}/${month}/${day}`;

const addData = async (
  noteHeader: string,
  noteContent: string,
  callback: () => void
) => {
  callback();
  await fetch("http://localhost:3000/note/", {
    method: "POST",
    body: JSON.stringify({
      header: noteHeader,
      content: noteContent,
      created_at: formattedDate,
    }),
  });
};

const addNote = () => {
  return { addData };
};

export default addNote;
