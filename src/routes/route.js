const express = require("express");
const router = express.Router();
const  CollegeController = require('../controllers/CollegeController');
const  InternController = require('../controllers/InternController');

router.post('/functionup/colleges',  CollegeController.createCollege);
router.post('/functionup/interns',InternController.createIntern);

router.get('/functionup/collegeDetails',CollegeController.getInternlist)


module.exports = router;