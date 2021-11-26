const express = require('express');
const router = express.Router();

const cowinController= require("../controllers/cowinController")




router.get("/londonwheather", cowinController.weather)
router.get("/wheather", cowinController.londonweather)
router.get("/sortwheather", cowinController.getsortedWeather)
module.exports = router;