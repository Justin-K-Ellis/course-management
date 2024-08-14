const api = axios.create({ baseURL: "/" });
const form = document.querySelector("#form");
const newCourseNameBtn = document.querySelector("#new-course-name-btn");

const submitCourseNameChange = (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const newCourseName = formData.get("newCourseName");
  const courseID = formData.get("courseID");
  console.log(newCourseName, courseID);
  api
    .put(`/updatecourse/${courseID}`, { newCourseName })
    .then((response) => {
      console.log("Updated accepted.", response);
      window.location = "/courses";
    })
    .catch((error) => {
      console.log(error);
    });
};

newCourseNameBtn.addEventListener("click", submitCourseNameChange);
