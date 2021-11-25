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

/*let mw = function (req, res, next)
 {​​​​​​   
     let hello = req.headers['x-auth-token']   
  if (!hello) {​​​​​​  
         return res.send({​​​​​​ msg: "token was not found" }​​​​​​)    }​​​​​​
      else {​​​​​​ 
               let decodetoken = jwt.verify(hello, 'my secret key')      
           if (decodetoken) {​​​​​​     
               req.decodetoken=decodetoken         
                next()      
              }​​​​​​ else {​​​​​​  
                          res.send({​​​​​​ msg: "token is not valid" }​​​​​​)    
                }​​​​​​   
         }
         ​​​​​​}​​​​​​
*/
module.exports.mw = mw