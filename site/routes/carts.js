const express = require('express');
const router = express.Router();
const cartsController = require('../controllers/cartsController');
const {check, validationResult,body } = require('express-validator');

const middLogueados = require('../middlewares/middUsuariosLogueados')
const middInvitados = require('../middlewares/middInvitado')

// Detalle de productos en el carrito
router.get('/productCart', cartsController.productCart);

// Incorporacion de productos al carrito
router.post('/:id', cartsController.addOneProduct);

// Actualizar cantidad de un producto
router.put('/:id', cartsController.update);

// Borrar productos del carrito
router.delete('/product/:id', cartsController.deleteProduct);

// Borrar todo el carrito
router.delete('/:id', cartsController.deleteCart);

// Confirmacion de carrito
router.get('/productCartPayment', middInvitados, cartsController.productCartPayment);
router.post('/productCartPayment/finish', middInvitados, cartsController.finishedCart);

//router.put('/:id', cartsController.update);


//retiro en tienda



//envio a domicilio - vinculación con tabla Address
// router.get('/addressCart', cartsController.address);
// router.post('/addressCart', [
//     check('domicilio').isLength({min: 3}).withMessage('- Domicilio inválido'),
//     check('codigoPostal').isInt({min:5000, max:6000}).withMessage('- Código postal inválido'),
//     check('localidad').isLength({min: 3}).withMessage('- Localidad inválida')
//   ],cartsController.postAddress);



module.exports = router;
