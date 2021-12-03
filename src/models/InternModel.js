const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const blogSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"

        }
    },
    mobile:{
        type: Number,
        unique: true,
        required: true,
        validate: {
            validator: function (v) {
                return /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(v);
            },
            message: "Please enter a valid mobile number"

    }
},

    collegeId:{
        type:ObjectId,
        ref : 'collegeDB'
    },

  
    isDeleted: {
        type: Boolean,
        default: false
    },

}, { timestamps: true })

module.exports = mongoose.model('Blog', blogSchema)


