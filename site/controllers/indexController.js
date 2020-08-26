const fs = require('fs');
const path = require('path');
let db = require('../database/models');


let indexController = {
    'index': function(req,res){
        let mensajeNews = ""
        res.render('index',{usuario: req.session.usuarioLogueado, mensajeNews:mensajeNews});
    },
    // 'productCart': function(req,res){
    //     res.render('productCart',{usuario: req.session.usuarioLogueado});
    // // },
    // 'productAdd': function(req,res){
    //     res.render('productAdd',{usuario: req.session.usuarioLogueado});
    // },
    // 'productCartPayment': function(req,res){
    //     res.render('productCartPayment',{usuario: req.session.usuarioLogueado});
    // }
    'news': function(req,res){
        db.Newsletter.create({
            email: req.body.email
        })
            .then(function(newsletter){
                let mensajeNews = "Ya te suscribiste a las mejores ofertas"
                res.render('index',{mensajeNews:mensajeNews, usuario: req.session.usuarioLogueado})
            })
    }
}

module.exports = indexController;