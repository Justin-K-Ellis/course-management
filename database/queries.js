const pool = require("./pool.js");

const getCourses = async () => {
  const { rows } = await pool.query(
    `SELECT courses.id, courses.course_name, instructors.inst_name
      FROM courses
      JOIN instructors
      ON courses.instructor_id = instructors.id
      ORDER BY course_name ASC;`
  );
  return rows;
};

const getSingleCourseName = async (id) => {
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

const getInstructorIdFromCourseId = async (courseId) => {
  const { rows } = await pool.query(
    "SELECT instructor_id FROM courses WHERE id = $1",
    [courseId]
  );
  return rows;
};

const getInstructorIdFromInstructorName = async (name) => {
  const { rows } = await pool.query(
    "SELECT id FROM instructors WHERE inst_name = $1",
    [name]
  );
  return rows;
};

const updateCourseInstructor = async (id, courseName) => {
  await pool.query(
    "UPDATE courses SET instructor_id = $1 WHERE course_name = $2",
    [id, courseName]
  );
};

const getInstructorList = async () => {
  const { rows } = await pool.query(
    "SELECT inst_name FROM instructors ORDER BY inst_name ASC"
  );
  return rows;
};

module.exports = {
  getSingleCourseName,
  getCourses,
  addCourse,
  deleteCourse,
  getInstructorIdFromCourseId,
  getInstructorIdFromInstructorName,
  updateCourseInstructor,
  updateCourseName,
  getInstructorList,
};
