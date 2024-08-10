const pool = require("./pool.js");

const getCourses = async () => {
  const { rows } = await pool.query("SELECT * FROM courses");
  return rows;
};

module.exports = { getCourses };
