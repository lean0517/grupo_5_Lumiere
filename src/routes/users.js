const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const usersController = require('../controllers/usersController')
const {check} =require ('express-validator');
const validations = require('../middleware/validacionesUser');


router.get('/registro', usersController.registro);
router.post('/', upload.single('userImage'),validations, usersController.storeDeUsuarios)

module.exports=router
