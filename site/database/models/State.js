const config = require("../config/config");

module.exports = (sequelize, dataTypes) => {
    let alias = "State";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
        },
    }
    let config = {
        tableName: "states", //el mismo nombre en el modelo
        timestamps: false
    }
    const State = sequelize.define(alias,cols,config);

    
    State.associate = function(models){
        State.hasMany(models.Address,{
            alias: "addresses",
            foreignKey: "state_id"
        })
    }


    return State;
}