let footerController = {
    'faqs': function(req,res){
        let mensajeNews = " "
        res.render('faqs',{usuario: req.session.usuarioLogueado, mensajeNews: mensajeNews })
    },
    'contact': function(req,res){
        let mensajeNews = " "
        res.render('contact',{usuario: req.session.usuarioLogueado, mensajeNews: mensajeNews })
    }
}

module.exports = footerController;