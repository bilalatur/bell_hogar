var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsController');
const middUploadProductImage = require('../middlewares/middUploadProductImage');
const middProducts = require('../middlewares/middProducts');
const {check, validationResult,body } = require('express-validator');


// Ruta de listado de productos
router.get('/', productsController.products);

// Ruta de busqueda de productos
router.post('/search', productsController.search);

// Ruta GET - Creación de productos
router.get('/create', productsController.createProduct);
// Ruta POST - Guardado de creación de producto
router.post('/create', middUploadProductImage.uploadFile, middProducts.registerProductValidation, productsController.postProduct);

// Ruta de producto clickeado - Detalle
router.get('/:id', productsController.productDetail);

// Rutas de Actualización de productos
router.get('/:id/edit', productsController.editProduct);
router.put('/:id/edit', middProducts.registerProductValidation, middUploadProductImage.uploadFile, productsController.putEditProduct);

// Rutas para deshabilitar un producto
router.get('/:id/delete', productsController.formuDelete);
router.put('/:id/delete', productsController.delete);


// Rutas para habilitar un producto
router.get('/:id/habilitar', productsController.habilitar);
router.put('/:id/habilitar', productsController.habilitarPut);

// Ruta de adm de productos
router.get('/adm/prod', productsController.admProd);

module.exports = router;