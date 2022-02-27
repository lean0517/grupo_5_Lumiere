const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const usersController = require('../controllers/usersController')

router.get('/registro', usersController.registro);
router.post('/', upload.single('user-image'), usersController.storeDeUsuarios)

module.exports=router
