const express = require('express');
const { authenticateJWT } = require('../middleware/authenticator');
const router = express.Router();
const upload=require('../middleware/multer')
const collectionController = require('../controllers/collection')


router.post('/',upload.single('collectionImage'),collectionController.create)

router.get('/', collectionController.readAll);

module.exports = router