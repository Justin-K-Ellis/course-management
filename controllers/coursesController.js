const db = require("../database/queries.js");

const getCourses = async (req, res) => {
  const courses = await db.getCourses();
  res.render("courses", { courses, pageTitle: "Manage Courses" });
};

const postCourse = async (req, res) => {
  const course_name = req.body.course_name;
  await db.addCourse(course_name);
  res.redirect("/courses");
};

const addCoursePage = async (req, res) => {
  res.render("newCourse", { pageTitle: "Add a Course" });
};

const deleteCourse = async (req, res) => {
  const id = req.params.id;
  try {
    await db.deleteCourse(id);
    res.status(200).json({ message: `Course ${id} deleted` });
  } catch (error) {
    res.status(500).json({ message: `Failed to delete course ${id}.` });
  }
};

const updateCoursePage = async (req, res) => {
  const courseID = req.params.id;
  const data = await db.getSingleCourseName(courseID);
  const courseName = data[0].course_name;
  const instructorList = await db.getInstructorList();
  // console.log("The instructor list is:", typeof instructorList);
  // instructorList.forEach((instructor) => {
  //   console.log(instructor);
  // });
  res.render("updatecourse", {
    pageTitle: "Update Course",
    courseName,
    courseID,
    instructorList,
  });
};

const updateCourseInfo = async (req, res) => {
  const id = req.params.id;
  const newCourseName = req.body.newCourseName;
  const newInstructor = req.body.newInstructorName;
  try {
    // update course name
    await db.updateCourseName(newCourseName, id);
    // update course instructor
    console.log("New instructor:", newInstructor, "course id:", id);
    const [instructorId] = await db.getInstructorIdFromInstructorName(
      newInstructor
    );
    console.log("Instructor id:", instructorId.id);
    await db.updateCourseInstructor(instructorId.id, newCourseName);
    res.json({ message: "Update successful." });
  } catch (error) {
    res.status(500).json({ message: `Failed to update course name. ${error}` });
  }
};

const getAllInstructorName = async (req, res) => {
  try {
    await db.getAllInstructorName();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getCourses,
  postCourse,
  addCoursePage,
  deleteCourse,
  updateCoursePage,
  updateCourseInfo,
};
