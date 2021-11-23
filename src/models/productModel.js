const mongoose=require('mongoose')

const productSchema= new mongoose.Schema({


    name:String,
	category:String,
	price:{
        type:Number,
        required:true
    }


   

}, {timestamps: true} )

module.exports = mongoose.model( 'product', productSchema ) 



// Intro to Backend Engineering
// FunctionUp
// #Programming #backend #nodejs #bestBookEver #cool #lifeChanging