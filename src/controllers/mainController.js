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
    productDetail: function (req, res){
        return res.render('products/productDetail')
    },
    productCart: function (req, res){
        return res.render('products/productCart')
    },
}
module.exports=mainController;