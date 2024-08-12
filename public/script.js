const api = axios.create({ baseURL: "/" });

// courses.ejs
const delBtns = document.querySelectorAll(".btn-warning");

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

// updatecourse.ejs
// const form = document.querySelector("#form");
// const newCourseNameBtn = document.querySelector("#new-course-name-btn");

// const submitCourseNameChange = (event) => {
//   event.preventDefault();
//   const formData = new FormData(form);
//   const newCourseName = formData.get("newCourseName");
//   console.log(newCourseName);
// };

// newCourseNameBtn.addEventListener("click", submitCourseNameChange);
