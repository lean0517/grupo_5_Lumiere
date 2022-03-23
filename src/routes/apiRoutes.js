const express = require ('express');
const router = express.Router();
const apiController = require ('../controllers/apiController')

router.get ('/products',apiController.productList)
router.get ('/products/:id',apiController.productId)
router.get ('/categories',apiController.productByCategory)
/* router.get ('/ultimoProducto',apiController.ultimoProducto) */
router.post('/products',apiController.creaProducto)
router.delete('/products/:id', apiController.eliminarProducto)


router.get('/users', apiController.listarUsuarios)
router.get('/users/:id', apiController.mostrarUsuario)

module.exports=router