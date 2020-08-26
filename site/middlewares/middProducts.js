const fs = require('fs');
const path = require('path');
const {check, validationResult, body} = require('express-validator');

   let middProducts = {
      middNext: function(req, res, next){

        next();
    },
      registerProductValidation: [
         check('nombre')
            .exists().withMessage('Nombre no definido.')
            .trim()
            .isLength({min: 5}).withMessage('Error: El Nombre del producto debe tener al menos 5 caracteres.'),
         check('descripcion')
            .exists().withMessage('Descripción no definida.')
            .trim()
            .isLength({min: 20}).withMessage('Error: La descripción del producto debe tener al menos 20 caracteres.'),
         check('categoria')
            .exists().withMessage('Categoría no definida.')
            .trim()
            .isLength({min: 3}).withMessage('Error: La categoría debe tener al menos 3 caracteres.'),
         check('subcategoria')
            .exists().withMessage('Subcategoría no definida.')
            .trim()
            .isLength({min: 3}).withMessage('Error: La Subcategoria debe contener al menos 3 caracteres.'),
         check('marca')
            .exists().withMessage('Marca no definido.')
            .trim()
            .isLength({min: 2}).withMessage('Error: La Marca debe contener al menos 2 caracteres.'),
         check('precio')
            .exists().withMessage('precio no definido.')
            .trim()
            .isNumeric().withMessage('Error: El precio no es válido.'),
         check('stock')
            .exists().withMessage('Stock no definido.')
            .trim()
            .isNumeric().withMessage('Error: El stock no es válido.'),
      ],
   }

module.exports = middProducts;