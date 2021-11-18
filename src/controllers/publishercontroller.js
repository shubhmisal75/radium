const publisherModel= require("../models/publishermodel")

const createPublisher= async function (req, res) {
    var data= req.body
    let savedData= await publisherModel.create(data)
    res.send({msg: savedData})    
}


const getPublisher= async function (req , res) {
    let allpublisher= await publisherModel.find()
    res.send({data: allpublisher})
}

module.exports.createPublisher = createPublisher
module.exports.getPublisher = getPublisher