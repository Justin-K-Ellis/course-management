const db = require("../database/queries.js");

// Create
const postStudent = async (req, res) => {
  const name = req.body.name;
  try {
    db.postStudent(name);
    res.json({ message: `${name} added to DB.` });
  } catch (error) {
    res.status(500).json(error);
  }
};

// Read
const getAllStudents = async (req, res) => {
  try {
    const students = await db.getAllStudents();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getStudentNameFromId = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    console.log("student id recieved by controller:", studentId);
    const studentName = await db.getStudentNameFromId(studentId);
    res.json(studentName);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getRegisteredCoursesByStudentId = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const courses = await db.getRegisteredCoursesByStudentId(studentId);
    res.json(courses);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update
const putStudentName = async (req, res) => {
  try {
    const newName = req.body.newName;
    const studentId = req.body.studentId;
    await db.putStudentName(newName, studentId);
    res.json({ message: `Name changed to ${newName}.` });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const postStudentCourse = async (req, res) => {
  const courseId = req.body.courseId;
  const studentId = req.body.studentId;
  try {
    await db.postStudentCourse(courseId, studentId);
    res.json({ message: `Student ${studentId} signed up for ${courseId}.` });
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete
const deleteAStudent = async (req, res) => {
  const studentId = req.params.id;
  try {
    await db.deleteAStudent(studentId);
    res.json({ message: `Student ${studentId} deleted.` });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deregisterCourse = async (req, res) => {
  const courseId = req.params.courseId;
  const studentId = req.params.studentId;
  try {
    await db.deregisterCourse(courseId, studentId);
    res.json({
      message: `Student ${studentId} deregistered from course ${courseId}.`,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllStudents,
  getStudentNameFromId,
  postStudent,
  getRegisteredCoursesByStudentId,
  putStudentName,
  postStudentCourse,
  deleteAStudent,
  deregisterCourse,
};
