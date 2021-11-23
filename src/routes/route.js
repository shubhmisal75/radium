const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const productController = require('../controllers/productController')
const orderController = require('../controllers/orderController')
const appMiddleware = require('../middlewares/appMiddleware')

router.post('/users', userController.createUser);
//For JWT session
router.get('/users/:userId', userController.getDetails)
//For JWT session
//router.post('/login', userController.login)
router.post('/products', productController.createProduct);
router.post('/orders', appMiddleware.validateAppType, orderController.createOrder);


module.exports = router;

//appMiddleware.validateAppType