const axios = require("axios");

// res.status(200). send( { data: userDetails } )


const confirmOtp = async function (req, res){

  try{ 

    let options = {
     method : "post", // method has to be post
     url : `https://cdn-api.co-vin.in/v2/auth/public/confirmOTP`,
     data: { "otp": "608030",
     "txnId": "3e7d47f0-cff3-4385-a96f-e6b287b907b4" } // we are sending the json body in the data 
   }
   let response= await axios(options)

   let id= response.data
   res.status(200).send( {msg: "Success", data: id} )

}
catch(err) {
   console.log(err.message)
   res.status(500).send( { msg: "Something went wrong" } )
}
}



const weather = async function (req, res) {
        let options = {
            method: "get",
            url: "http://api.openweathermap.org/data/2.5/weather?q=London&appid=e7bff9b3a24bb5d619f3fc6fc7de5f07"
        }

        let data1 = await axios(options )
      //  let temp = data1.data.name
        console.log(data1)
        let gotit = data1.data
        
        res.status(200).send({ msg: "Successfully fetched data", temp: gotit });


      
      
      }

      const londonweather = async function (req, res) {
        let options = {
            method: "get",
            url: "http://api.openweathermap.org/data/2.5/weather?q=London&appid=e7bff9b3a24bb5d619f3fc6fc7de5f07"
        }

        let data1 = await axios(options )
      //  let temp = data1.data.name
        console.log(data1)
        let gotit = data1.data
        
        res.status(200).send({ msg: "Successfully fetched data", temp: gotit });

      }

      const getsortedWeather = async function (req, res) { 
        try {
      
            let citinames=  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
            let newarrayofcity=[] 
      
            for (i=0 ;i<citinames.length; i++){
      
                let object= { city: citinames[i] }
                let resp=  await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${citinames[i]}&appid=f1a93c7f2832ca822dc0920253b1614a`)
                console.log(resp.data.main.temp)
      
                object.temp= resp.data.main.temp
      
                newarrayofcity.push(object)
            }
      
            let sort=newarrayofcity.sort(  function(a, b) { return a.temp - b.temp } )
           
            console.log(sort)
            res.status(200).send({status: true, data: sort}) 
        } catch (error) {
            console.log(error)
            res.status(500).send({status: false, msg: "server error"})
        }
      }
      
      
      
      module.exports.getsortedWeather = getsortedWeather;


module.exports.weather =weather;
module.exports.londonweather =londonweather;