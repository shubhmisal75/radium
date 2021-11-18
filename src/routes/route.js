const express = require('express');
const router = express.Router();
const BookModel= require("../models/Bookmodel")

const BookController= require("../controllers/BookController")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});


router.post('/createBook',BookController.createBook);
router.get('/getallBooks',BookController.getBookData);
router.post('/getBookbyyear',BookController.getBookbyyear);
router.post('/getperticularBook',BookController.getparticularBookdata);
router.get('/getXINRBooks',BookController.getXINRBooks);
router.get('/getRandomBooks',BookController.getRandomBook);

module.exports = router;