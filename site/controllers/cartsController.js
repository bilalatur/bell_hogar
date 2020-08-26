const fs = require('fs');
const path = require('path');
const {check, validationResult,body } = require('express-validator');
let db=require('../database/models');
const sequelize = db.sequelize;

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const formatPrice = (price) => toThousand(Math.round(price));

let cartsController = {
    'renderCart' : function(req,res, mensaje = null, status = null){
        if(req.session.usuarioLogueado == undefined){
            res.render('users/error-invitados')
        } else {
            db.Cart.findOne({
                where:{
                    user_id: req.session.usuarioLogueado.id,
                    finished: false,
                },
                include:[
                    {association:"Product"},
                ],
            }).then(function(cart) {
                if(cart){
                    db.CartProduct.findAll({
                        where:{
                            cart_id: cart.id,
                        }
                    }).then(function(cart_products) {
                        if(cart_products){
                            let total = 0;
                            cart_products.forEach((product, i) => {
                                total += product.subtotal;
                            });

                            let msj = mensaje;
                            let stat = status;
                            res.render('carts/productCart',{usuario: req.session.usuarioLogueado, cart, cart_products,  toThousand, formatPrice, total, mensaje: msj, status: stat});
                        }
                    })
                } else {
                    res.render('carts/productCart',{usuario: req.session.usuarioLogueado, toThousand, formatPrice, cart: undefined, mensaje: undefined, status: undefined});
                }
            })
        }
    },
    'productCart': function(req,res){
        cartsController.renderCart(req,res);
    },
    'productCartPayment': function(req,res){
        if(req.session.usuarioLogueado == undefined){
            res.render('users/error-invitados')
        } else {
            db.User.findByPk(req.session.usuarioLogueado.id)
            .then((usuario) => {
                db.Cart.findOne({
                    where:{
                        user_id: usuario.id,
                        finished: false,
                    },
                    include:[
                        {association:"Product"},
                    ],
                }).then(function(cart) {
                    if(cart){
                        db.CartProduct.findAll({
                            where:{
                                cart_id: cart.id,
                            }
                        }).then(function(cart_products) {
                            let total = 0;

                            if(cart_products){
                                cart_products.forEach((product, i) => {
                                    total += product.subtotal;
                                });
                            }

                            return res.render("carts/productCartPayment",{usuario, cart, cart_products, total, toThousand, formatPrice});
                        })
                    }
                })
            }).catch(function(error) {
                console.log(error);
            })
        }
    },
    'addOneProduct': function(req,res){
        if(req.session.usuarioLogueado == undefined){
            res.render('users/error-invitados')
        } else {
            db.Cart.findOrCreate({
                where:{
                    user_id: req.session.usuarioLogueado.id,
                    finished: false,
                },
                defaults: {
                    total: 0,
                }
            }).then(function(cart){
                if(cart){
                    db.product.findOne({
                        where:{
                            id: req.params.id
                        }
                    }).then(function(product){
                        db.CartProduct.findOrCreate({
                            where:{
                                cart_id: cart[0].id,
                                product_id: req.params.id,
                            },
                            defaults: {
                                units: 1,
                                subtotal: product.price,
                            }
                        }).then(function(cart_product){
                            if(cart_product[1]){
                                let mensaje = "Info: Excelente! el producto se agregó a tu carrito de compras.";
                                let status = "info";
                                cartsController.renderCart(req,res, mensaje, status);
                            } else {
                                let mensaje = "Atención!: El producto que deseas ya estaba añadido a tu carrito de compras!";
                                let status = "warning";
                                cartsController.renderCart(req,res, mensaje, status);
                            }
                        })
                    })
                }
            }).catch(function(error) { // en el caso de existir un error
                console.log(error);
            })
        }
    },
    'update': function(req,res){
        // obtenemos los datos que envió el cliente
        let product_id = req.params.id;
        let user_id = req.session.usuarioLogueado.id;
        let cant = req.body.cantidad;

        if (cant < 1 || isNaN(cant) ) {
            let mensaje = "Error: No se pudo guardar el ítem de compra. Por favor, ingresa una cantidad válida de unidades a comprar.";
            let status = "warning";
            cartsController.renderCart(req,res, mensaje, status);
        } else {
            // chequeamos que la cantidad ingresada no supere al stock disponible
            db.product.findOne({
                where:{
                    id: product_id
                }
            }).then(function(producto) {
                if (cant <= producto.stock) {
                    db.Cart.findOne({
                        where:{
                            user_id: user_id,
                            finished: false,
                        }
                    }).then(function(cart) {
                        db.CartProduct.findOne({
                            where:{
                                cart_id: cart.id,
                                product_id: product_id
                            }
                        }).then(function(cart_product) {
                            if(cart_product){
                                let subtotal = producto.price * cant;
                                db.CartProduct.update({ units: cant, subtotal: subtotal }, {
                                    where: {
                                        cart_id: cart.id,
                                        product_id: product_id
                                    }
                                }).then(function(is_updated) {
                                    if(is_updated){
                                        let mensaje = "Cantidad actualizada.";
                                        let status = "success";
                                        cartsController.renderCart(req,res, mensaje, status);
                                    }
                                })
                            }
                         })
                    })
                } else { // tenemos un problema! la cantidad ingresada es mayor que el stock disponible
                    let mensaje = "Error: la cantidad de unidades a comprar es mayor que el stock disponible, por favor, ingrese una cantidad válida y guardar los cambios nuevamente.";
                    let status = "warning";
                    cartsController.renderCart(req, res, mensaje, status);
                }
                }).catch(function(error) { // en el caso de existir un error
                    console.log(error);
                })
        }
    },
    'deleteProduct': function(req,res){
        let product_id = req.params.id;
        let user_id = req.session.usuarioLogueado.id;

        db.Cart.findOne({
            where:{
                user_id: user_id,
                finished: false,
             }
        }).then(function(cart) {
            db.CartProduct.destroy({
                where: {
                    cart_id: cart.id,
                    product_id: product_id
                }
            }).then(function(){
                db.CartProduct.count({
                    where: {
                        cart_id: cart.id,
                    }
                }).then(function(count){
                    if(count === 0){
                        db.Cart.destroy({
                            where: {
                                user_id: user_id,
                            }
                        }).then(function(count){
                            let mensaje = "Ya no tenés productos en el carrito.";
                            let status = "info";
                            cartsController.renderCart(req, res, mensaje, status);
                        })
                    }

                    let mensaje = "El producto fue removido del carrito.";
                    let status = "info";
                    cartsController.renderCart(req, res, mensaje, status);
                })
            })
        }).catch(function(error){
            let mensaje = "Error: no se pudo quitar el producto del carrito de compras.";
            let status = "error";
            carritoController.renderWithMessage(req, res, mensaje, status);
        });
    },
    'deleteCart': function(req,res){
        let cart_id = req.params.id;

        db.Cart.findByPk(cart_id).then(function(cart) {
            if(cart){
                db.CartProduct.destroy({
                    where: {
                        cart_id: cart.id,
                    }
                }).then(function(){
                    db.Cart.destroy({
                        where: {
                            id: cart.id,
                        }
                    }).then(function(){
                        let mensaje = "Ya no tenés productos en el carrito.";
                        let status = "info";
                        cartsController.renderCart(req, res, mensaje, status);
                    })
                })
            }
        }).catch(function(error){
            let mensaje = "Error: no se pudo quitar el producto del carrito de compras.";
            let status = "error";
            carritoController.renderWithMessage(req, res, mensaje, status);
        });
    },
    'finishedCart': function(req,res){
        db.Cart.update({
                finished: true,
                total: 12345,
                },
                { where:{
                        user_id: req.session.usuarioLogueado.id,
                        finished: false,
                    },
                }).then(function(finishedCart){
                    console.log(finishedCart)
                    res.redirect('/')
                });
        }



    // 'address': function(req,res){
    //     let dbStates = db.State.findAll();
    //     let dbUserAddresses = db.Address.findAll({
    //         where: {
    //             user_id: req.session.usuarioLogueado.id
    //         },
    //         include: db.State
    //     });
    //     Promise.all([dbStates, dbUserAddresses])
    //     .then(([states, addresses]) => {
    //         return res.render("carts/addressCart", {usuario: req.session.usuarioLogueado, states, addresses});
    //     });
    // },
    // 'postAddress': function(req,res){
    //     let errors = validationResult(req);
    //         if(errors.errors.length == 0){
    //             let userId = req.session.usuarioLogueado.id;

    //             db.Address.create({
    //                 address: req.body.domicilio,
    //                 zip_code: req.body.codigoPostal,
    //                 locality: req.body.localidad,
    //                 state_id: req.body.provincia,
    //                 user_id: userId
    //             })
    //             .then((address) => {
    //                 console.log("----------------------"+address)
    //                 if (!address) {
    //                     res.render('carts/productCartPayment', { errors:errors.errors })
    //                 } else {
    //                     db.Address.findOne({
    //                         where: {
    //                             id: address.id
    //                         },
    //                         include: db.State
    //                     }).then((address)=>{
    //                         mensaje = "¡El domicilio de entrega se registró exitosamente!";
    //                         return res.render("carts/productCartPayment",{mensaje, status: "success", address, usuario: req.session.usuarioLogueado});
    //                     });
    //                 }
    //             }).catch(function(err){
    //                 console.log(err);
    //             })
    //         } else {
    //             console.log(errors)
    //             let dbStates = db.State.findAll();
    //             let dbUserAddresses = db.Address.findAll({
    //                 where: {
    //                     user_id: req.session.usuarioLogueado.id
    //                 },
    //                 include: db.State
    //             });
    //             Promise.all([dbStates, dbUserAddresses])
    //             .then(([states, addresses]) => {
    //                 return res.render("carts/addressCart", {usuario: req.session.usuarioLogueado, states, addresses, errors: errors.errors});
    //             });
    //             //return res.render("carts/addressCart",{errors: errors.errors} );
    //         }
    // },
}
module.exports = cartsController