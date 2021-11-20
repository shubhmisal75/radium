const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

 const mw= function(req,res,next)
{
  var todaysDate = new Date();

    var fulldate =  todaysDate.getDate() + "-"
    + (todaysDate.getMonth()+1) + "-" +
    todaysDate.getFullYear() + "  , " +
    todaysDate.getHours() + ":" +
    todaysDate.getMinutes() + ":" +
    todaysDate.getSeconds();

     let ip = req.ip
      let url = req.originalUrl
     console.log(` ${fulldate}  ${ip}  ${url} ` )
     next();
}

app.use(mw)

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://user-open-to-all:hiPassword123@cluster0.xgk0k.mongodb.net/shubhamDB-database?retryWrites=true&w=majority", {useNewUrlParser: true})
    .then(() => console.log('mongodb running and connected'))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});





