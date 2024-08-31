const pool = require("./pool.js");

// Course pages queries
const getCourses = async () => {
  const { rows } = await pool.query(
    `SELECT courses.id, courses.course_name, instructors.inst_name, instructor_id
      FROM courses
      JOIN instructors
      ON courses.instructor_id = instructors.id
      ORDER BY course_name ASC;`
  );
  return rows;
  q;
};

const getSingleCourseName = async (id) => {
  const { rows } = await pool.query(
    "SELECT course_name FROM courses WHERE id = $1",
    [id]
  );
  return rows;
};

const addCourse = async (course, instructorId) => {
  await pool.query(
    "INSERT INTO courses (course_name, instructor_id) VALUES ($1, $2)",
    [course, instructorId]
  );
};

const setCourseInstructorId = async (instructorId, courseId) => {
  await pool.query("UPDATE courses SET instructor_id = $1 WHERE id = $2;", [
    instructorId,
    courseId,
  ]);
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

// Instructor pages queries
const getInstructorList = async () => {
  const { rows } = await pool.query(
    "SELECT inst_name, id FROM instructors ORDER BY inst_name ASC"
  );
  return rows;
};

const postInstructor = async (instructorName) => {
  await pool.query("INSERT INTO instructors (inst_name) VALUES ($1)", [
    instructorName,
  ]);
};

const putInstructor = async (instructorName, instructorId) => {
  await pool.query("UPDATE instructors SET inst_name = $1 WHERE id = $2", [
    instructorName,
    instructorId,
  ]);
};

const deleteInstructor = async (id) => {
  await pool.query("DELETE FROM instructors WHERE id = $1", [id]);
};

const getInstructorsCourses = async (instructorId) => {
  const { rows } = await pool.query(
    `SELECT instructors.inst_name, instructors.id, courses.id, courses.course_name 
                                      FROM courses
                                      JOIN instructors
                                      ON courses.instructor_id = instructors.id
                                      WHERE instructors.id = $1;`,
    [instructorId]
  );
  return rows;
};

// Students queries

// Create
const postStudent = async (name) => {
  try {
    await pool.query("INSERT INTO students (student_name) VALUES ($1)", [name]);
  } catch (error) {
    console.log(error);
  }
};

// Read
const getAllStudents = async () => {
  try {
    const { rows } = await pool.query(
      "SELECT * FROM students ORDER BY student_name ASC"
    );
    return rows;
  } catch (error) {
    console.log(error);
  }
};

const getStudentNameFromId = async (id) => {
  try {
    const { rows } = await pool.query("SELECT * FROM students WHERE id = $1", [
      id,
    ]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

const getRegisteredCoursesByStudentId = async (studentId) => {
  try {
    const { rows } = await pool.query(
      "SELECT courses.course_name, courses.id FROM courses JOIN courses_students ON courses.id = courses_students.course_id WHERE courses_students.student_id = $1;",
      [studentId]
    );
    return rows;
  } catch (error) {
    console.log(error);
  }
};

// Update
const putStudentName = async (newName, studentId) => {
  try {
    await pool.query("UPDATE students SET student_name = $1 WHERE id = $2;", [
      newName,
      studentId,
    ]);
  } catch (error) {
    console.log(error);
  }
};

const postStudentCourse = async (courseId, studentId) => {
  try {
    await pool.query(
      "INSERT INTO courses_students (course_id, student_id) VALUES ($1, $2);",
      [courseId, studentId]
    );
  } catch (error) {
    console.log(error);
  }
};

// Delete
const deleteAStudent = async (studentId) => {
  try {
    await pool.query("DELETE FROM students WHERE id = $1;", [studentId]);
  } catch (error) {
    console.log(error);
  }
};

// Deregister a course
const deregisterCourse = async (courseId, studentId) => {
  try {
    await pool.query(
      "DELETE FROM courses_students WHERE course_id = $1 and student_id = $2;",
      [courseId, studentId]
    );
  } catch (error) {
    console.log(error);
  }
};

const getAllCoursesStudents = async () => {
  try {
    const { rows } = await pool.query(`
        SELECT courses_students.student_id, students.student_name, courses.course_name
        FROM courses
        JOIN courses_students
        ON courses.id = courses_students.course_id
        JOIN students
        ON courses_students.student_id = students.id
        ORDER BY course_name ASC;
      `);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getSingleCourseName,
  getCourses,
  addCourse,
  setCourseInstructorId,
  deleteCourse,
  getInstructorIdFromCourseId,
  getInstructorIdFromInstructorName,
  updateCourseInstructor,
  updateCourseName,
  getInstructorList,
  postInstructor,
  putInstructor,
  deleteInstructor,
  getInstructorsCourses,
  postStudent,
  getStudentNameFromId,
  getRegisteredCoursesByStudentId,
  putStudentName,
  postStudentCourse,
  getAllStudents,
  deleteAStudent,
  deregisterCourse,
  getAllCoursesStudents,
};
