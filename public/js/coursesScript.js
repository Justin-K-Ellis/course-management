const api = axios.create({ baseURL: "/" });

const delBtns = document.querySelectorAll(".btn-warning");

// Get delete button by ID
delBtns.forEach((btn) => {
  btn.addEventListener("click", async () => {
    console.log(btn.id);
    try {
      const reply = confirm("Are you sure you want to delete this course?");
      if (reply) {
        const response = await api.delete(`/delete/${btn.id}`);
        console.log("Deleted:", response.data);
        const row = btn.closest("tr");
        if (row) {
          row.remove();
        }
      }
    } catch (error) {
      console.log(error);
    }
  });
});
