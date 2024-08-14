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
  res.render("updatecourse", {
    pageTitle: "Update Course",
    courseName,
    courseID,
  });
};

const updateCourseName = async (req, res) => {
  const id = req.params.id;
  const newCourseName = req.body.newCourseName;
  try {
    await db.updateCourseName(newCourseName, id);
    res.json({ message: "Update successful." });
  } catch (error) {
    res.status(500).json({ message: `Failed to update course. ${error}` });
  }
};

module.exports = {
  getCourses,
  postCourse,
  addCoursePage,
  deleteCourse,
  updateCoursePage,
  updateCourseName,
};
