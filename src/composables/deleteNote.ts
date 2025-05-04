const getDataToDelete = async (id: string) => {
  await fetch("http://localhost:3000/note/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log("Deleted");
      }
    })
    .catch((err) => {
      console.error(err.message);
    });
};

const deleteItem = () => {
  return { getDataToDelete };
};

export default deleteItem;
