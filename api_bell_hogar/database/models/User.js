const config = require("../config/config");

module.exports = (sequelize, dataTypes) => {
    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        dni_cuit: {
            type: dataTypes.DOUBLE
        },
        is_admin: {
            type: dataTypes.BOOLEAN
        },
        image: {
            type: dataTypes.STRING
        },
        phone: {
            type: dataTypes.DOUBLE
        },
        created_at: {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        },
        password: {
            type: dataTypes.STRING,
        },
        address_id: {
            type: dataTypes.INTEGER,
        },
        payment_id: {
            type: dataTypes.INTEGER,
        }
    }
    let config = {
        tableName: "users", //el mismo nombre en el modelo
        timestamps: false
    }

    const User = sequelize.define(alias,cols,config)

    return User;
}