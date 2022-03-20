const express = require ('express');
const router = express.Router();
const apiController = require ('../controllers/apiController')

router.get ('/products',apiController.productList)
router.get ('/products/:id',apiController.productId)
router.get ('/categories',apiController.productByCategory)
router.post('/products',apiController.creaProducto)
router.delete('/products/:id', apiController.eliminarProducto)

module.exports=router