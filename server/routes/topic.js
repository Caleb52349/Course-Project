const express = require('express');
const router = express.Router();
const topicController = require('../controllers/topic');
const { authenticatateJWT } = require('../middleware/authenticator');

router.post('/', topicController.create);
router.get('/', topicController.readAll);

module.exports = router;