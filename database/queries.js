const pool = require("./pool.js");

const getCourses = async () => {
  const { rows } = await pool.query("SELECT * FROM courses ORDER BY id ASC");
  return rows;
};

const addCourse = async (course) => {
  await pool.query("INSERT INTO courses (course_name) VALUES ($1)", [course]);
};

module.exports = { getCourses, addCourse };
