const config = require("../config/config");

module.exports = (sequelize, dataTypes) => {
    let alias = "Payment";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        card_number: {
            type: dataTypes.STRING
        },
        user_id: {
            type: dataTypes.INTEGER,
        },
    }
    let config = {
        tableName: "payment", //el mismo nombre en el modelo
        timestamps: false
    }
    const Payment = sequelize.define(alias,cols,config)

    
    Payment.associate = function(models){
        Payment.belongsTo(models.User, {
            alias: "userPayment",
            foreignKey: "user_id"
        })
    }


    return Payment;
}