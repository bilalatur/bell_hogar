function invitadoMidd(req,res,next){
    if(req.session.usuarioLogueado != undefined){
        next();
    } else {
        res.render('users/error-invitados')
    }
}

module.exports = invitadoMidd; 