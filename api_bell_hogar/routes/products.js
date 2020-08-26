const path = require('path');
const express = require('express');
const router = express.Router();
const apiProductsController = require('../controllers/apiProductsController');

router.get('/', apiProductsController.productsList);
router.get('/count', apiProductsController.productsCount);
router.get('/mas-stock', apiProductsController.productsMasStock);
router.get('/menos-stock', apiProductsController.productsMenosStock);
router.get('/category', apiProductsController.productsByCategory);
router.get('/category-products', apiProductsController.productsByCategoryName);
router.get('/last-product', apiProductsController.lastProduct);

module.exports = router;