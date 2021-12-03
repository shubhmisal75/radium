const express = require("express");
const router = express.Router();
const  CollegeController = require('../controllers/CollegeController');
const  internController = require('../controllers/InternController');
//const Middleware=require("../middlewares/Authentication")


//----------------------APIs--------------------------------

//  ROUTES

router.post('/college',  CollegeController.createCollege);
//outer.post('/login',authorController.login)


//  ROUTES


module.exports = router;