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

module.exports = { getCourses, postCourse, addCoursePage };
