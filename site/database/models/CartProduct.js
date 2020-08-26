module.exports = (sequelize, dataTypes) => {

    let alias = "CartProduct";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cart_id: {
            type: dataTypes.INTEGER,
        },
        product_id: {
            type: dataTypes.INTEGER,
        },
        // unit_price: {
        //     type: dataTypes.FLOAT
        // },
        units: {
            type: dataTypes.INTEGER,
            allowNull: true,
        },
        subtotal: {
            type: dataTypes.FLOAT,   //se recomienda para redondear divisiones antes que DECIMAL
            allowNull: false,
            defaultValue: 0,
        },
        created_at: {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
    };

    let config = {
        tableName: 'cart_products',
        timestamps: true,
        underscored: true,
    }

    const CartProduct = sequelize.define(alias, cols, config);

    //  CartProduct.associate = function (models){
    //     CartProduct.hasMany(models.Product, {
    //         as: 'product',
    //         foreignKey: 'id',
    //     }),
    //     CartProduct.hasMany(models.Cart, {
    //         as: 'cart',
    //         foreignKey: 'id'
    //     })
    // }

    return CartProduct;
}