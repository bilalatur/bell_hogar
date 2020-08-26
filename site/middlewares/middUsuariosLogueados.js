function logueadosMidd(req,res,next){
    if(req.session.usuarioLogueado == undefined){
        next();
    } else {
        res.render('users/error-logueados')
    }
}

module.exports = logueadosMidd;