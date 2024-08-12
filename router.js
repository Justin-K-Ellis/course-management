const express = require("express");
const router = express.Router();
const indexController = require("./controllers/indexController.js");
const coursesController = require("./controllers/coursesController.js");

// Index
router.get("/", indexController.getIndex);
// Courses controller
router.get("/courses", coursesController.getCourses);
router.post("/postcourse", coursesController.postCourse);
router.get("/addcourse", coursesController.addCoursePage);
router.delete("/delete/:id", coursesController.deleteCourse);
// Students controller
router.get("/students", indexController.getStudents);
// Instructors controller
router.get("/instructors", indexController.getInstructors);

module.exports = router;
