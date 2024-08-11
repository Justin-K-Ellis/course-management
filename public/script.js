const delBtns = document.querySelectorAll(".btn-warning");
const api = axios.create({ baseURL: "/" });

// Get delete button by ID
delBtns.forEach((btn) => {
  btn.addEventListener("click", async () => {
    console.log(btn.id);
    try {
      const response = await api.delete(`/delete/${btn.id}`);
      console.log("Deleted:", response.data);
      const row = btn.closest("tr");
      if (row) {
        row.remove();
      }
    } catch (error) {
      console.log(error);
    }
  });
});
