const express = require ("express");
const app = express () ;
const path = require ("path");
const mainRouter = require('./routes/main') 

app.listen ( process.env.PORT || 3000 , () => {
console.log('Servidor corriendo en el puerto 3000')})

app.use(express.static(path.resolve(__dirname, '../public')))
app.use('/', mainRouter)
app.use('/registrate', mainRouter)
app.use('/login', mainRouter)
app.use('/productdetail', mainRouter)
app.use('/productcart', mainRouter)
app.use('/crearProducto', mainRouter)
app.use('/editarProducto', mainRouter)

app.set('view engine', 'ejs')
app.set ('views', path.resolve(__dirname,'views'))