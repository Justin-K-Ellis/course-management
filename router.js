const express = require("express");
const router = express.Router();
const indexController = require("./controllers/indexController.js");
const coursesController = require("./controllers/coursesController.js");

// Index
router.get("/", indexController.getIndex);
// Courses controller
router.get("/courses", coursesController.getCourses);
// Students controller
router.get("/students", indexController.getStudents);
// Instructors controller
router.get("/instructors", indexController.getInstructors);

module.exports = router;
