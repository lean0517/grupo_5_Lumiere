const express = require ("express");
const app = express ();
const path = require ("path");
const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const apiRouter =require('./routes/apiRoutes')
const methodOverride = require("method-override")
const session =require ('express-session');
const usuarioLogueado = require('./middleware/usuarioLogueado');
const cors = require('cors');

app.use(express.static(path.resolve(__dirname, '../public')))

app.listen ( process.env.PORT || 3001 , () => {
console.log('Servidor corriendo en el puerto 3001')})

app.use(session({
    secret: "es un secreto",
    resave: false,
    saveUninitialized: false,
}));

app.use(usuarioLogueado);

app.use(express.urlencoded({extended: false }));
app.use(express.json());

app.use(methodOverride("_method"));

app.use(cors());
app.use('/products', productsRouter);
app.use("/",mainRouter)
app.use("/users",usersRouter)
app.use("/api", apiRouter)


app.set('view engine', 'ejs')
app.set ('views', path.resolve(__dirname,'views'))

