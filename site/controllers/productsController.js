const fs = require('fs');
const path = require('path');
let db = require('../database/models');
let Sequelize = db.sequelize;
const Op = Sequelize.Op;
const {check, validationResult,body } = require('express-validator');
var mensajeNews = " ";

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const formatPrice = (price) => toThousand(Math.round(price));

let productsController = {
    'products': function(req,res){
        db.product.findAll({
            where:{
                enabled: 1
            }
        })
        .then(function(product){
            res.render('products/products',{product, usuario: req.session.usuarioLogueado, toThousand, formatPrice});
        })
    },
    'productDetail': function(req,res){
        db.product.findByPk(req.params.id)
        .then(function(product){
            if (req.session.usuarioLogueado == undefined) {
                return res.render('products/productDetail', {product, usuario: undefined, toThousand, formatPrice});
            }else{
                return res.render('products/productDetail', {product, usuario: req.session.usuarioLogueado, toThousand, formatPrice});
            }
        })
    },
    'createProduct': function(req,res){
        res.render('products/productAdd',{usuario: req.session.usuarioLogueado , toThousand, formatPrice});
    },
    'postProduct': function(req,res){
        let errors = validationResult(req); // validar variable errors
        if (typeof req.file == undefined) { // validar imagen 
            let nuevoError = {
                value: '',
                msg: 'Error: es obligatorio subir una imagen de producto(jpg, jpeg o png).',
                param: 'image',
                location: 'files'
            }
            errors.errors.push(nuevoError);
        };
        if(errors.errors.length == 0){
            db.product.create({
                name: req.body.nombre,
                description: req.body.descripcion,
                category: req.body.categoria,
                subcategory:req.body.subcategoria,
                brand:req.body.marca,
                price:req.body.precio,
                image1:req.files[0].filename,
                image2:req.files[1].filename,
                image3:req.files[2].filename,
                stock:req.body.stock,
                enabled: 1
            })
            .then((creacion) => {
                console.log(req.files);
                if (!creacion) {
                    res.render('index', { errors:errors.errors, mensajeNews: mensajeNews, usuario: req.session.usuarioLogueado, toThousand, formatPrice})
                } else {
                    mensaje = "¡El producto se creó exitosamente!";
                    return res.render('index',{mensaje: mensaje, mensajeNews: mensajeNews, status: "success", usuario:req.session.usuarioLogueado, toThousand, formatPrice});
                }
            })
            .catch(function(err){
                console.log(err);
            })
        } else {
            return res.render("products/productAdd",{errors: errors.errors, usuario: req.session.usuarioLogueado, toThousand, formatPrice} );
        }
    },
    'editProduct': function(req,res){
        db.product.findByPk(req.params.id)
        .then(function(product){
            if (product != null) {
                return res.render('products/editProduct', {product, usuario: req.session.usuarioLogueado, toThousand, formatPrice});
            }else{
                return res.render('products/editProductError', {usuario: req.session.usuarioLogueado});
            }
        })
    },
    'putEditProduct': function(req,res){
        let errors = validationResult(req); // validar variable errors
        if (typeof req.file == undefined) { // validar imagen 
            let nuevoError = {
                value: '',
                msg: 'Error: es obligatorio subir 3 imágenes de producto(jpg, jpeg o png).',
                param: 'image',
                location: 'files'
            }
            errors.errors.push(nuevoError);
        };

        if(errors.errors.length == 0){
            db.product.update({
                name: req.body.nombre,
                category:req.body.categoria,
                subcategory:req.body.subcategoria,
                brand:req.body.marca,
                description: req.body.descripcion,
                price:req.body.precio,
                image1:req.files[0].filename,
                image2:req.files[1].filename,
                image3:req.files[2].filename,
                stock:req.body.stock
            }, {
                where:{
                    id: req.params.id
                }
            })
            .then((edicion) => {
                if (!edicion) {
                    res.render('index', { errors:errors.errors, mensajeNews: mensajeNews, usuario: req.session.usuarioLogueado })
                } else {
                    mensaje = "¡El producto se actualizó exitosamente!";
                    return res.render('index',{mensaje: mensaje, mensajeNews: mensajeNews, status: "success", usuario:req.session.usuarioLogueado});
                }
            })
            .catch(function(err){
                console.log(err);
            })
        }else{
            res.render('index',{errors: errors.errors, mensajeNews: mensajeNews , usuario: req.session.usuarioLogueado });
        }
},
'formuDelete':function(req,res){
    db.product.findByPk(req.params.id)
    .then(function(product){
        if (product != null) {
            return res.render('products/deleteProduct',{product,usuario: req.session.usuarioLogueado, toThousand, formatPrice});
        }else{
            return res.render('products/editProductError',{usuario: req.session.usuarioLogueado});
        }
    })
},
'delete': function(req,res){
    db.product.update({
        enabled: 0
    }, {
        where:{
            id: req.params.id
        }
    })
    res.render('index',{usuario: req.session.usuarioLogueado, mensajeNews: mensajeNews });
},
'habilitar':function(req,res){
    db.product.findByPk(req.params.id)
    .then(function(product){
        if (product != null) {
            return res.render('products/habilitarProd',{product,usuario: req.session.usuarioLogueado, toThousand, formatPrice});
        }else{
            return res.render('products/editProductError',{usuario: req.session.usuarioLogueado, toThousand, formatPrice});
        }
    })
},
'habilitarPut': function(req,res){
    db.product.update({
        enabled: 1
    }, {
        where:{
            id: req.params.id
        }
    })
    res.render('index',{usuario: req.session.usuarioLogueado, mensajeNews: mensajeNews });
},
'admProd':function(req,res){
    db.product.findAll()
        .then(function(product){
            res.render("products/admProd",{product:product,usuario:req.session.usuarioLogueado, toThousand, formatPrice})
        })
},
'search': function(req,res){
    db.product.findAll({
        where:{
            [db.Sequelize.Op.or]: [
                {name:
                    {[db.Sequelize.Op.like]:'%' + req.body.search + '%'}
                },
                {description:
                    {[db.Sequelize.Op.like]:'%' + req.body.search + '%'}
                },
                {category:
                    {[db.Sequelize.Op.like]:'%' + req.body.search + '%'}
                },
            ],
            enabled : 1
        },
        order:[
            ["name","DESC"]
    ],
        limit: 10,
    })
    .then(function(product){
        let mensaje = null;
        if(product.length === 0){
            mensaje = "No se encontraron resultados para: ";
        }else{
            mensaje = "Se encontraron los siguientes resultados para: ";
        }

        res.render("products/productsSearch",{product, mensaje, search: req.body.search,  usuario:req.session.usuarioLogueado, toThousand, formatPrice})
    })
    .catch(function(error){
        console.log(error)
    })
    },
}

module.exports = productsController;
