const mongoose = require('mongoose')

const InternSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is required.'
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: 'Email Address is required.'
    },
    mobile: {
        type: Number,
        unique: true,
        trim: true,
        required: 'Mobile Number is required.'
    },

    collegeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'collegeDB'
    },


    isDeleted: {
        type: Boolean,
        default: false
    },

}, { timestamps: true })

module.exports = mongoose.model('InternDB', InternSchema)


