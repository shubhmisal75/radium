const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/movies', function (req,  res) {
    var arr = ["iron man" , "avenger","avenger2","batman"]
    
   
        res.send(arr)
})

router.get('/movies/index',function (req,res)
{
    let values = req.params.index
    const arr = ["iron", "gold","silver", "branze"]
    if(value > arr.length){
        res.send("invalid")
    }
    else{
        res.send(arr[values])
    }
})

router.get('/films',function(req , res)
{
const array = ['{id : 1 , name : batman}',
'{ id : 2 , name : iron man }','{id : 3 , name : super man}',
'{id : 4 , , name : avenger}'
]
req. send(array)
})

router.get('/films/:movieId', function (req ,res){
let val = req.params.movieId

const ar = ['{id : 1 , name : batman}',
'{ id : 2 , name : iron man }','{id : 3 , name : super man}',
'{id : 4 , , name : avenger}']

if(val < ar.length){
    res.send(ar[val])

}
else{
    res.send("invalid ")
}

})

module.exports = router;