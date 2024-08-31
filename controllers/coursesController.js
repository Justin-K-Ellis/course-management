const db = require("../database/queries.js");

const getCourses = async (req, res) => {
  const courses = await db.getCourses();
  res.json(courses);
};

const postCourse = async (req, res) => {
  try {
    const course_name = req.body.course_name;
    const instructorName = req.body.instructorName;
    const [instructorId] = await db.getInstructorIdFromInstructorName(
      instructorName
    );
    await db.addCourse(course_name, instructorId.id);
    res.status(200).json({ message: `Course "${course_name}" accepted.` });
  } catch (error) {
    console.log(`Something went wrong. ${error}`);
    res.status(500).json({ message: error });
  }
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

const updateCourseInfo = async (req, res) => {
  const id = req.params.id;
  const newCourseName = req.body.newCourseName;
  const newInstructor = req.body.newInstructorName;
  try {
    // update course name
    await db.updateCourseName(newCourseName, id);
    // update course instructor
    const [instructorId] = await db.getInstructorIdFromInstructorName(
      newInstructor
    );
    await db.updateCourseInstructor(instructorId.id, newCourseName);
    res.json({ message: "Update successful." });
  } catch (error) {
    res.status(500).json({ message: `Failed to update course name. ${error}` });
  }
};

const getAllCoursesStudents = async (req, res) => {
  try {
    const coursesStudents = await db.getAllCoursesStudents();
    res.json(coursesStudents);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getCourses,
  postCourse,
  deleteCourse,
  updateCourseInfo,
  getAllCoursesStudents,
};
