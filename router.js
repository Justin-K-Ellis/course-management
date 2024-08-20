const express = require("express");
const router = express.Router();
const indexController = require("./controllers/indexController.js");
const coursesController = require("./controllers/coursesController.js");
const instructorController = require("./controllers/instructorController.js");

// Index
router.get("/", indexController.getIndex);

// Courses controller
router.get("/courses", coursesController.getCourses);
router.post("/postcourse", coursesController.postCourse);
router.get("/addcourse", coursesController.addCoursePage);
router.delete("/delete/:id", coursesController.deleteCourse);
router.get("/updatecourse/:id(\\d+)", coursesController.updateCoursePage);
router.put("/updatecourse/:id", coursesController.updateCourseInfo);

// Students controller
router.get("/students", indexController.getStudents);

// Instructors controller
router.get("/instructors", instructorController.getInstructors);
router.delete("/delete-instructor/:id", instructorController.deleteInstructor);
router.get(
  "/instructors-courses/:id",
  instructorController.getInstructorsCourses
);

module.exports = router;
