const CollegeModel = require('../models/CollegeModel')
const InternModel = require('../models/InternModel')
const mongoose = require('mongoose')


const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false

    if (typeof value === 'string' && value.trim().length === 0) return false

    return true

}

const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
}


const createIntern = async function (req, res) {
    try {

        const requestBody = req.body
        const { name, email, mobile, collegeName } = requestBody

        if (!collegeName) {
            res.status(400).send({ status: false, message: ' college Name is required' })
            return
        }
        const getCollegeDetail = await CollegeModel.findOne({ name: collegeName, isDeleted: false })

        if (!getCollegeDetail) {
            res.status(400).send({ status: false, message: "Given College Name is invalid or it is deleted" })
            return
        }

        const collegeId = getCollegeDetail._id

        if (!isValidRequestBody(requestBody)) {
            res.status(400).send({ status: false, message: 'Invalid request parameters.' })
            return
        }

        if (!isValid(name)) {
            res.status(400).send({ status: false, message: ' name is required' })
            return
        }

        if (!isValid(email)) {
            res.status(400).send({ status: false, message: ' Email is required' })
            return
        }

        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            res.status(400).send({ status: false, message: 'Email should be a valid email address' })
            return
        }
        if (!isValid(mobile)) {
            res.status(400).send({ status: false, message: ' mobile is required' })
            return
        }


        if (!(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(mobile))) {
            res.status(400).send({ status: false, message: `Mobile Number is not valid` })
            return
        }

        //Re-construction
        const internDetails = {
            name,
            email,
            collegeId,
            mobile
        }

        let internData = await InternModel.create(internDetails)
        res.status(201).send({ status: true, data: internData })

    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }

}

module.exports = { createIntern }

