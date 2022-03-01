function usuarioLogueado (req,res,next){
    res.locals.logueado = false;

    if (req.session && req.session.userLogged){
        res.locals.logueado = true;
        res.locals.usuarioLogueado = req.session.userLogged;
    }
    next();
}
module.exports =usuarioLogueado;