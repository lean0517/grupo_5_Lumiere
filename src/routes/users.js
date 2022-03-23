const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const usersController = require('../controllers/usersController')
const {check} =require ('express-validator');
const validations = require('../middleware/validacionesUser');
const guestMiddleware = require('../middleware/guestMiddleware')


router.get('/registro', usersController.registro);
router.post('/', upload.single('avatar_id'),validations, usersController.storeDeUsuarios);


router.get( '/login',  usersController.login);
router.post('/login', usersController.procesoLogin);

router.get('/home', usersController.perfil)
router.get('/logout', usersController.logout);

module.exports=router
