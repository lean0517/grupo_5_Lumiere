const express = require('express');
const router = express.Router();
// const upload = require('../middleware/multer');
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); 
router.post('/', productsController.store); 

/*** GET ONE PRODUCT ***/ 
router.get('/:id', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/:edit/:id', productsController.edit); 
router.post('/:id', productsController.update); 

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 


module.exports = router;