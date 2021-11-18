const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema= new mongoose.Schema({


  Name : String,
   
    author: {
        type: ObjectId,
        ref: 'myAuthor'
    },
    publisher:{
        type: ObjectId,
        ref:'mypublisher'
    },
   
    prices: Number,
    ratings : Number
   
    // summary : "this is a suspense novel"
    //  summary : ["ch1: Intro to backend", "ch2: intro to mongodb", "ch3: intro to nodejs:"]
    // summary : { 
    //              chapter1: "How to get started with tech",
    //              chapter2: "lets start with basics"
    //   



}, {timestamps: true} )

module.exports = mongoose.model( 'myBook', bookSchema ) 

