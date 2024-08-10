const db = require("../database/queries.js");

const getCourses = async (req, res) => {
  const courses = await db.getCourses();
  //   res.send(courses);
  res.render("courses", { courses });
};

module.exports = { getCourses };
