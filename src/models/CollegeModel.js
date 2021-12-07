const mongoose = require('mongoose')

const CollegeSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        required: 'Abbreviated college name'
    },
    fullName: {
        type: String,
        trim: true,
        required: 'Full College name is required'
    },
    logoLink: {
        type: String,
        required: 'Logo Link is required'

    },

    isDeleted: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })

module.exports = mongoose.model('CollegeDB', CollegeSchema)