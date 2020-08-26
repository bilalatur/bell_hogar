var express = require('express');
var router = express.Router();
let indexController = require('../controllers/indexController');
let footerController = require('../controllers/footerController');

// Ruta de inicio
router.get('/', indexController.index);

//Ruta newseletters
router.post('/', indexController.news);

// Ruta de contacto
router.get('/contacto', footerController.contact);

//Ruta faqs
router.get('/faqs', footerController.faqs);

// // Ruta de carrito
// router.get('/productCart', indexController.productCart);

// // Ruta de pago de carrito
// router.get('/productCartPayment', middInvitado, indexController.productCartPayment);

module.exports = router;