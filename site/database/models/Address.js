const config = require("../config/config");

module.exports = (sequelize, dataTypes) => {
    let alias = "Address";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        address: {
            type: dataTypes.STRING,
        },
        user_id: {
            type: dataTypes.INTEGER,
        },
        zip_code: {
            type: dataTypes.INTEGER,
        },
        locality: {
            type: dataTypes.STRING,
        },
        state_id: {
            type: dataTypes.INTEGER,
        },
    }
    let config = {
        tableName: "address", //el mismo nombre en el modelo
        timestamps: false
    }
    const Address = sequelize.define(alias,cols,config);

    
    Address.associate = function(models){
        Address.belongsTo(models.User, {
            alias: "userAddresses",
            foreignKey: "user_id"
        }),
        Address.belongsTo(models.State,{
            alias: "stateAddresses",
            foreignKey: "state_id"
        })
    }


    return Address;
}