const db = require("../database/queries.js");

const getInstructors = async (req, res) => {
  const instructors = await db.getInstructorList();
  instructors.forEach((i) => {
    console.log(i);
  });
  res.render("instructors", { pageTitle: "Instructors", instructors });
};

const deleteInstructor = async (req, res) => {
  const id = req.params.id;
  try {
    await db.deleteInstructor(id);
    res.status(200).json({ message: `Instructor ${id} deleted.` });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// const getIndividualInstructor = async (req, res) => {
//   const instructorId = req.params.id;
//   try {

//   } catch (error) {
//     res.status(500).json({message: error})
//   }
// }

const getInstructorsCourses = async (req, res) => {
  const id = req.params.id;
  try {
    const instructorsCourses = await db.getInstructorsCourses(id);
    // res.status(200).json(instructorsCourses); // TODO: render this in a page view
    res.render("single-instructor", { instructorsCourses });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { getInstructors, deleteInstructor, getInstructorsCourses };
