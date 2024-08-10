const express = require("express");
const router = express.Router();
const indexController = require("./controllers/indexController.js");

router.get("/", indexController.getIndex);
router.get("/courses", indexController.getCourses);
router.get("/students", indexController.getStudents);
router.get("/instructors", indexController.getInstructors);

module.exports = router;
