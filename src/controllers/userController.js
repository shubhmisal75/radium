const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createUser = async function (req, res) {
   let userbody = req.body
    let userCreated = await userModel.create(userbody)
    res.send({data: userCreated})
}

//For JWT session
const login = async function (req, res) {
  let   userName = req.body.name
   let  userPassword = req.body.password

    let user = await userModel.findOne({name: userName, password: userPassword, isDeleted: false})
    if(user) {
        const generatedToken = jwt.sign({userId: user._id}, "radium")
        res.send({status: true, data:user._id , token: generatedToken})   //data: user._id, token: generatedToken
    } else {
        res.send({status: false, message: 'Invalid credentials'})
    }
}

//For JWT session


const getDetails = async function (req, res) {
  
    if(req.validToken){
        let user = await userModel.findOne({_id: req.params.userId, isDeleted : false });
        if(user){
            res.send({status:true, data: user})
        }
        else{
            res.send({status: false ,   msg:"invalid userId"})
        }
    
    }
    else{
        res.send({status:false, msg:"invalid tokenId"})
    }
}

const updatemail = async function(req, res ){
    let userId =req.params.userId
    let mail = req.body.email
    let check = await userModel.findByIdAndUpdate({_id: userId},{$set:{email:mail}})
    res.send({data:check})
}

module.exports.updatemail= updatemail
module.exports.createUser = createUser
module.exports.getDetails = getDetails
module.exports.login = login