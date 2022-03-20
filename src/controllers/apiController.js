const db = require("../database/models");
const product = require("../database/models/product");
const Op =db.sequelize.Op;
// controlador para consultas en api
const apiController = {

    //lista productos desde la base de datos
    productList: (req, res) =>{
    db.product
    .findAll()
    .then(products => {
        return res.status(200).json({
            total:products.length,
            data:products,
            status: 200
            })
        })
    },

    //muestra producto especifico por ID desde la base de datos
    productId: (req,res) => {
        db.product
        .findByPk(req.params.id)
        .then (product=>{
            return res.status(200).json({
                data:product,
                satus:200
            })
        })
    },
    //crea un producto en la base de datos
    creaProducto: (req,res) => {
        db.product
        .create(req.body)
        .then (product=>{
            return res.status(200).json({
                data:product,
                satus:200,
                created: 'ok'
            })
        })
    },

    //elimina un producto de la base de datos usando la api enviando id
    eliminarProducto: (req,res) =>{
        db.product
        .destroy({
            where:{
                id_product:req.params.id
            }
        })
        .then(respose =>{
            return res.json(respose)
        })
    },
    productByCategory: (req,res) => {
        db.product
        .findAll({
            where:{
                id_category: req.body.id_category
            }
        })
        .then (categorias=>{
            return res.status(200).json({
                data:categorias,
                satus:200
            })
        })
    },
}

module.exports= apiController;