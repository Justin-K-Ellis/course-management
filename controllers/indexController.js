const cs = "coming soon";
const db = require("../database/queries.js");

const getIndex = (req, res) => {
  res.render("index");
};

const getStudents = (req, res) => {
  res.send(cs);
};

module.exports = { getIndex, getStudents };
