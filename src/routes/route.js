const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

const appMiddleware = require('../middlewares/appMiddleware')

router.post('/users', userController.createUser);

router.get('/users/:userId',appMiddleware.mw, userController.getDetails)
/
router.post('/login', userController.login)


router.put('/updatemail/:userId',userController.updatemail)
module.exports = router;

//appMiddleware.validateAppType