const path = require('path');

const mainController = {
    index: function (req, res){
        return res.render('home')
    },

    productCart: function (req, res){
        return res.render('products/productCart')
    },

}

module.exports=mainController;