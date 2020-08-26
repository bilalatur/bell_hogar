const config = require("../config/config");

module.exports = (sequelize, dataTypes) => {
    let alias = "product";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        category: {
            type: dataTypes.STRING
        }, 
        subcategory: {
            type: dataTypes.STRING
        },
        brand: {
            type: dataTypes.STRING
        }, 
        description: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.DOUBLE
        },
        image1: {
            type: dataTypes.STRING
        },
        image2: {
            type: dataTypes.STRING
        },
        image3: {
            type: dataTypes.STRING
        },
        image4: {
            type: dataTypes.STRING
        },
        stock: {
            type: dataTypes.DOUBLE
        },
        enabled: {
            type: dataTypes.DOUBLE
        }
    }
    let config = {
        tableName: "product", //el mismo nombre en el modelo
        timestamps: false
    }
    const product = sequelize.define(alias,cols,config)

    product.associate = function (models){
        product.belongsToMany(models.Cart, {
                as: 'carritoProducto',
                through:"cart_products",
                //foreignKey:"id",
                //otherKey:"product_id",
                timestamps:false
        })
        // Product.belongsTo(models.CartProduct, {
        //     as: 'cartProduct',
        //     foreignKey: 'id'
        // })
    };

    return product;
}