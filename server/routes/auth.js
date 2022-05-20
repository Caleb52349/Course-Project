const express = require('express');
const { signupController } = require('../controllers/auth');
const { signupValidator,validatorResult } = require('../middleware/validator');
const router = express.Router()


router.post('/signup',signupValidator,validatorResult,signupController)


module.exports = router;