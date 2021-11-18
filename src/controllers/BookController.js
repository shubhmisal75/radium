const BookModel= require("../models/Bookmodel.js")

const createBook= async function (req, res) {
    var data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})    
}



const getBookData= async function (req, res) {
    let allBooks= await BookModel.find().select({bookName : 1 ,author:1, _id:0})
    res.send({msg: allBooks})
}

const getBookbyyear= async function (req, res) {
    let allBooks= await BookModel.find({year: req.body.year})
     res.send({msg: allBooks})
}

const getparticularBookdata= async function (req, res) {
    let allBooks= await BookModel.find(req.body)
res.send({msg: allBooks})
}

const getXINRBooks= async function (req, res) {
    let allBooks= await BookModel.find({'price.indian': {$in:["100","200","500"]}})
    res.send({msg: allBooks})
}
const getRandomBook= async function (req, res) {
    let allBooks= await BookModel.find( {$or :[ {availablestock : true } , {pages :{$gt : 500}}]})
    res.send({msg: allBooks})
}

//done

module.exports.createBook= createBook
module.exports.getBookData= getBookData
module.exports.getBookbyyear= getBookbyyear
module.exports.getparticularBookdata = getparticularBookdata
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBook = getRandomBook