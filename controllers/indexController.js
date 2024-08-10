const cs = "coming soon";
const db = require("../database/queries.js");

const getIndex = (req, res) => {
  res.render("index");
};

const getCourses = async (req, res) => {
  const courses = await db.getCourses();
  res.send(courses);
};

const getStudents = (req, res) => {
  res.send(cs);
};

const getInstructors = (req, res) => {
  res.send(cs);
};

module.exports = { getIndex, getCourses, getStudents, getInstructors };
