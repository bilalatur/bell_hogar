const config = require("../config/config");

module.exports = (sequelize, dataTypes) => {
    let alias = "Newsletter";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: "newsletters", //el mismo nombre en el modelo
        timestamps: false
    }
    const newsletter = sequelize.define(alias,cols,config)

    return newsletter;
}