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
    console.log(error);
    res.status(500).json({ message: `Failed to delete course ${id}.` });
  }
};

module.exports = { getCourses, postCourse, addCoursePage, deleteCourse };
