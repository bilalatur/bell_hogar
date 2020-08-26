const fs = require('fs');
const path = require('path');
const bcrypt=require('bcrypt');
const {check, validationResult,body } = require('express-validator');
let db = require('../database/models');

let usersController = { 
    'register': function(req,res){
        //db.State.findAll().then((states)=>{ 
            return res.render("users/register" );
       // });
    },
    'postregister': function(req,res){
        let errors = validationResult(req); // validar variable errors
        if (typeof req.file == undefined) { // validar imagen avatar
            let nuevoError = {
                value: '',
                msg: 'Error: es obligatorio subir una imagen de perfil (jpg, jpeg o png).',
                param: 'image',
                location: 'files'
            }
            errors.errors.push(nuevoError);
            };
      // Si todo está bien, procedemos a guardar el nuevo usuario (ver de enviar a perfil de usuario!!!)
            if(errors.errors.length == 0){ //sin error
                let avatarToCreate = req.file == undefined ? "random_profile.jpg" : req.file.filename;
                db.User.findOrCreate({
                    where: { email: req.body.email },
                    defaults: {
                        dni_cuit:req.body.id,
                        first_name: req.body.nombre,
                        last_name: req.body.apellido,
                        phone: req.body.telefono,
                        email: req.body.email,
                        password: bcrypt.hashSync(req.body.password, 10),
                        is_admin: false,
                        image: avatarToCreate,
                        //address_id:null,
                        //payment_id:null
                    }
                })
                .then(([usuario, creacion]) => {
                    if (!creacion) {
                        res.render('users/login', { errors:errors.errors })
                    } else {
                        mensaje = "¡El usuario se creó exitosamente! Ingresa nuevamente tu email y contraseña para continuar";
                        return res.render('users/login',{mensaje: mensaje, status: "success", usuario});
                    }
                }).catch(function(err){
                    console.log(err);
                })
            } else {
                //db.State.findAll().then((states)=>{
                    return res.render("users/register",{errors: errors.errors} );
                //});
            }
        },
    'login': function(req,res){
        res.render('users/login');
    },
    'postLogin': function(req,res){
        let errors = validationResult(req);
        if (errors.isEmpty()){
           db.User.findOne({
               where: {
                   email: req.body.email
                },
            }).then((usuarioPorLoguearse) => {
            if (usuarioPorLoguearse != null) {
                if (bcrypt.compareSync(req.body.password, usuarioPorLoguearse.password)) {
                    req.session.usuarioLogueado = usuarioPorLoguearse;
                        if(req.body.recordame != undefined){ //los checkbox si no están tildados son undefined
                            let expiracion = new Date(Date.now() + 900000);
                            res.cookie('recordame', usuarioPorLoguearse.email, {expires: expiracion}); // podríamos enviar el id en vez del email
                        };
                    let mensajeNews = " "
                    res.render('index', {usuario: usuarioPorLoguearse, mensajeNews: mensajeNews});
                }else {
                    res.render('users/login', {errors: errors.errors})
                };
            } else {
                res.render('users/register', { errors: [{ msg: 'El usuario no existe, registrate para continuar'}] })
            };
            }).catch(function(error){
                console.log(error);
            });
        }else {
            res.render('users/login', {errors: errors.errors})
        };
    },
    'profile': function(req,res){
        if(req.session.usuarioLogueado != undefined){
            db.Cart.findAll({
                where: {
                    user_id: req.session.usuarioLogueado.id,
                    finished: 1
                }
            })
            .then(function(cart){
                res.render('users/newProfile',{usuario: req.session.usuarioLogueado, cart: cart})
            })
        } else {
            res.render('users/error-invitados')
        }
    },
    'edit':function(req,res){
        if(req.session.usuarioLogueado != undefined){
            res.render('users/update',{usuario: req.session.usuarioLogueado});
        } else {
            res.render('users/error-invitados')
        }
    },
    'update':function(req,res){
        let errors = validationResult(req); // validar variable errors
        if(errors.errors.length == 0){ //sin error procedemos a guardar el usuario editado
            db.User.update({
                dni_cuit:req.body.id,
                first_name: req.body.nombre,
                last_name: req.body.apellido,
                phone: req.body.telefono,
                },{
                    where:{
                        email: req.body.email
                    }
                })
                .then((updatedUser) => {
                    return res.redirect("profile");
                    //return res.render("profile",{usuario:updatedUser}); //esta renderizacion falla siempre!
                }).catch(function(err){
                        console.log('error en catch en:' + err);
                })
        } else {
            console.log("edit: render");
            res.render('users/update', {errors: errors.errors })
        };
    },
    'logout': (req,res) => {
        req.session.destroy(function(){
           if (req.cookies.recordame != undefined) {
              res.clearCookie("recordame");
           };
           let mensaje = "Se cerró la sesión exitosamente";
           return res.render("users/login",{mensaje, status: "success", usuario: undefined});
        });
     },
     'editPassword': (req,res) => {
        if(req.session.usuarioLogueado != undefined){
            let mensaje = ""
            res.render('users/editPassword', {usuario: req.session.usuarioLogueado, mensaje: mensaje});
        } else {
            res.render('users/error-invitados')
        }
     },
     'postEditPassword': (req,res) =>{
        db.User.findByPk(req.params.id)
            .then(function(user){
                let pass = bcrypt.compareSync(req.body.oldPassword, user.password)
                console.log(pass)
                if(pass == true){
                    if(req.body.newPassword == req.body.newPassword2){
                        let newPass = bcrypt.hashSync(req.body.newPassword, 10)
                        db.User.update({
                            password: newPass
                        },{
                            where:{
                                id: req.params.id
                            }
                        })
                        res.render('users/profile', {usuario: req.session.usuarioLogueado})
                    } else {
                        let mensaje = "Las contraseñas no coinciden"
                        res.render('users/editPassword', {usuario: req.session.usuarioLogueado, mensaje: mensaje})
                    }
                } else {
                    let mensaje = "Los datos ingresados no son correctos"
                    res.render('users/editPassword', {usuario: req.session.usuarioLogueado, mensaje: mensaje})
                }
            })
    }
}

module.exports = usersController;