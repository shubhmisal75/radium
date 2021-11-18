const mongoose = require('mongoose')

const bookSchema= new mongoose.Schema({



    bookName: {
        type: String,
        required: true
    },
    price : {
        Indian:String,
        european:String,
},
    year: {type: Number,
        default : 2021
    },
     author: String,
    
     tags : [String],
     pages : Number,

     availablestock : {type:Boolean}

     })

module.exports = mongoose.model( 'Book', bookSchema ) 