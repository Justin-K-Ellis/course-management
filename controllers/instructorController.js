const db = require("../database/queries.js");

const getInstructors = async (req, res) => {
  const instructors = await db.getInstructorList();
  res.json(instructors);
};

const postInstructor = async (req, res) => {
  const newInstructor = req.body.newInstructor;
  try {
    await db.postInstructor(newInstructor);
  } catch (error) {
    console.log(error);
  }
};

const putInstructor = async (req, res) => {
  const instructorId = req.body.instructorId;
  const newName = req.body.newName;
  try {
    await db.putInstructor(newName, instructorId);
  } catch (error) {
    console.log(error);
  }
};

const deleteInstructor = async (req, res) => {
  const id = req.params.id;
  console.log("Id to delete:", id);

  try {
    await db.deleteInstructor(id);
    res.status(200).json({ message: `Instructor ${id} deleted.` });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getInstructorsCourses = async (req, res) => {
  const id = req.params.id;
  try {
    const instructorsCourses = await db.getInstructorsCourses(id);
    res.json(instructorsCourses);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getInstructors,
  postInstructor,
  putInstructor,
  deleteInstructor,
  getInstructorsCourses,
};
