const express = require("express");
const router = express.Router();
const indexController = require("./controllers/indexController.js");
const coursesController = require("./controllers/coursesController.js");
const instructorController = require("./controllers/instructorController.js");
const studentsController = require("./controllers/studentsController.js");

// Index
router.get("/", indexController.getIndex);

// Courses controller
router.get("/courses", coursesController.getCourses);
router.post("/courses/post", coursesController.postCourse);
// router.get("/courses/addcourse", coursesController.addCoursePage);
router.delete("/courses/delete/:id", coursesController.deleteCourse);
router.get("/courses/update/:id(\\d+)", coursesController.updateCoursePage);
router.put("/courses/update/:id", coursesController.updateCourseInfo);
router.get(
  "/courses/courses-students",
  coursesController.getAllCoursesStudents
);

// Students controller
router.post("/students/post/", studentsController.postStudent);
router.get("/students", studentsController.getAllStudents);
router.get("/students/:studentId", studentsController.getStudentNameFromId);
router.get(
  "/students/all-courses/:studentId",
  studentsController.getRegisteredCoursesByStudentId
);
router.put("/students/new-name", studentsController.putStudentName);
router.post("/students/register-course", studentsController.postStudentCourse);
router.delete("/students/delete/:id", studentsController.deleteAStudent);
router.delete(
  "/students/deregister/:courseId/:studentId",
  studentsController.deregisterCourse
);

// Instructors controller
router.get("/instructors", instructorController.getInstructors);
router.post("/instructors/post", instructorController.postInstructor);
router.put("/instructors/update", instructorController.putInstructor);
router.delete("/instructors/delete/:id", instructorController.deleteInstructor);
router.get(
  "/instructors/courses/:id",
  instructorController.getInstructorsCourses
);

module.exports = router;
