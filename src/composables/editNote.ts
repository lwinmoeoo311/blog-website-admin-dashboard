type editedData = {
  header: string;
  content: string;
};

const modifyNote = async (id: string, data: editedData) => {
  await fetch("http://localhost:3000/note/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      header: data.header,
      content: data.content,
    }),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Modified successfully");
      } else {
        throw new Error("Error code => " + response.status);
      }
    })
    .catch((err) => console.log(err.message));
};

export default modifyNote;
