const db = require("../database/queries.js");

const getInstructors = (req, res) => {
  res.send("coming soon");
};

const getInstructorList = async (req, res) => {
  try {
    const instructors = await db.getInstructorList();
    console.log(instructors);
    res.end();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getInstructors, getInstructorList };
