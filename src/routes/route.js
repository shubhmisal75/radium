const express = require('express');
const router = express.Router();

const cryptoController= require("../controllers/cryptoController")

router.get("/cryptoCoins", cryptoController.CryptoCoins)


router.get("/getcryptoCoins", cryptoController.getcryptoCoins)

module.exports = router;