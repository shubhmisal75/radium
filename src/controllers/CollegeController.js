const CollegeModel = require('../models/CollegeModel')
const mongoose = require("mongoose")
//const jwt = require("jsonwebtoken")

//------------------------1st-CREATE COLLEGE-------------------------------


const createCollege = async function (req, res) {

    try {
        const college = req.body;
        let create = await CollegeModel.create(college);
        res.status(200).send({ status:true, data:create });
    } catch (err) {
        res.status(500).send({ status:false, msg:err})
    }

}

module.exports.createCollege = createCollege