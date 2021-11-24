const jwt = require('jsonwebtoken')






const mw = function(req,res,next){
    let token = req.headers['x-auth-token'] 
    let validToken = jwt.verify(token, "radium")
if(validToken){
        req.validToken = validToken
        next()
    }
    else{
        res.send({ msg:"invalid token, please login again"})
    }
    
}



module.exports.mw = mw