const { application, Router } = require('express');
const express = require ('express');
const router = express.Router();
const mainController = require ('../controllers/mainController');

router.get('/', mainController.index)
router.get('/registrate', mainController.registrate)
router.get('/login', mainController.login)
router.get('/productdetail', mainController.productDetail)
router.get('/productcart', mainController.productCart)

module.exports=router;