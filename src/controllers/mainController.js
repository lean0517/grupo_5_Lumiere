const path = require('path');

const mainController = {
    index: function (req, res){
        return res.render('home')
    },
    registrate: function (req, res){
        return res.render('users/registrate')
    },
    login: function (req, res){
        return res.render('users/login')
    },
    // productDetail: function (req, res){
    //     return res.render('products/productDetail')
    // },
    // productCart: function (req, res){
    //     return res.render('products/productCart')
    // },
    // crearProducto: function (req, res){
    //     return res.render('products/crearProducto')
    // },
    // editarProducto: function (req, res){
    //     return res.render('products/editarProducto')
    // },
}

module.exports=mainController;