const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const {check, validationResult,body } = require('express-validator');
const middUploadFile = require('../middlewares/middUploadFile');
const middUsers = require('../middlewares/middUsers');
const middLogueados = require('../middlewares/middUsuariosLogueados')
const middInvitados = require('../middlewares/middInvitado') 

// Rutas de login
router.get('/login',middLogueados, usersController.login);
router.post('/login', [
  check('email').isEmail().withMessage('- Email inválido'),
  check('password').isLength({min: 8}).withMessage('- La contraseña debe tener al menos 8 caracteres')
],usersController.postLogin);

// Ruta de check
router.get('/success', function(req,res){
  if(req.session.usuarioLogueado == undefined){
      res.send("No estás logueado");
  } else {
      res.send("El usuario logueado es " + req.session.usuarioLogueado.nombre + " y su email es " + req.session.usuarioLogueado.email);
  }
});


// Ruta de profile
router.get('/profile', middInvitados, usersController.profile);


// Rutas de creación de usuario
router.get('/register', middLogueados, usersController.register);
router.post('/create', middUploadFile.uploadFile, middUsers.registerUserValidation, usersController.postregister);

// Rutas de edición de usuario
router.get('/update', middUsers.registerUserValidation, usersController.edit);
router.put('/update', usersController.update);

// Ruta de logout
router.post('/logout', usersController.logout);

// Rutas de eliminación de usuario
//router.get('/delete', middLogueados, usersController.register);
//router.delete('/delete', middUploadFile.uploadFile, middUsers.registerUserValidation, usersController.postregister);



module.exports = router;