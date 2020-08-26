module.exports = (sequelize, dataTypes) => {

    let alias = "Cart";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        total: {
            type: dataTypes.FLOAT,
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
        deleted_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        confirmed_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        finished: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
        }
    };

    let config = {
        tableName: 'carts',
        timestamps: true,
        underscored: true,  //cubre los atributos definidos-marcas de tiempo-claves externas. No afectará los atributos con la opción de campo establecida explícitamente
    }


    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = function (models){
        Cart.belongsTo(models.User, {
            as: 'User',
            foreignKey: 'user_id'
        })
        // Cart.belongsTo(models.CartProduct, {
        //     as: 'cartProduct',
        //     foreignKey: 'id'
        // })
        Cart.belongsToMany(models.product, {
            as: 'Product',
            through:"cart_products",
            //foreignKey:"cart_id",
           // otherKey:"product_id",
            timestamps:true
        })
    }
    return Cart;

};