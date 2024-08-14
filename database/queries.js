const pool = require("./pool.js");

const getCourses = async () => {
  const { rows } = await pool.query(
    // "SELECT * FROM courses ORDER BY course_name ASC"
    `SELECT courses.id, courses.course_name, CONCAT(instructors.first_name_inst, ' ', instructors.last_name_inst) AS inst_full_name
FROM courses
JOIN instructors
ON courses.instructor_id = instructors.id
ORDER BY course_name ASC;`
  );
  return rows;
};

const getSingleCourseName = async (id) => {
  // console.log("getSingleCourseName called with", id);

  const { rows } = await pool.query(
    "SELECT course_name FROM courses WHERE id = $1",
    [id]
  );
  return rows;
};

const addCourse = async (course) => {
  await pool.query("INSERT INTO courses (course_name) VALUES ($1)", [course]);
};

const deleteCourse = async (id) => {
  await pool.query("DELETE FROM courses WHERE id = $1", [id]);
};

const updateCourseName = async (newCourseName, id) => {
  await pool.query("UPDATE courses SET course_name = $1 WHERE id = $2", [
    newCourseName,
    id,
  ]);
};

module.exports = {
  getSingleCourseName,
  getCourses,
  addCourse,
  deleteCourse,
  updateCourseName,
};
