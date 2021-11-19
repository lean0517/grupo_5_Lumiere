const express = require ("express");
const app = express () ;
const path = require ("path");

const publicPath = path.resolve(__dirname, ("./public"));
app.use(express.static(publicPath));

app.listen ( process.env.PORT || 3000 , () => {
console.log('Servidor corriendo en el puerto 3000')});

app.get('/', function (req, res){
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})
app.get('/registrate', function (req, res){
    res.sendFile(path.resolve(__dirname,'./views/registrate.html'))
})
app.get('/login', function (req, res){
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})
app.get('/productdetail', function (req, res){
    res.sendFile(path.resolve(__dirname,'./views/productDetail.html'))
})
app.get('/productcart', function (req, res){
    res.sendFile(path.resolve(__dirname,'./views/productCart.html'))
})