const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const productController = require('../controllers/productController')
const orderController = require('../controllers/orderController')
const appMiddleware = require('../middleware/middleware')

router.post('/users', userController.createUser);




//router.get('/users/:userId', userController.getDetails)
//router.post('/login', userController.login)
router.post('/createproduct', productController.createproduct);
router.post('/orders', orderController.createOrder);


module.exports = router;
