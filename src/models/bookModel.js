const mongoose=require('mongoose')

const bookSchema= new mongoose.Schema({



    bookName: {
        type: String,
        required: true
    },
    
    author: String,
   
   

}, {timestamps: true} )

module.exports = mongoose.model( 'Book', bookSchema ) 



// Intro to Backend Engineering
// FunctionUp
// #Programming #backend #nodejs #bestBookEver #cool #lifeChanging