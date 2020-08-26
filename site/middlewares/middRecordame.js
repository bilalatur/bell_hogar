const path = require('path');
const fs = require('fs');
// let usersFilePath = path.join(__dirname, '../data/users.json');
// let users = JSON.parse(fs.readFileSync(usersFilePath,'utf-8'));
let db=require('../database/models');

function middRecordame(req,res,next){
    if(req.cookies.recordame != undefined && req.session.usuarioLogueado == undefined){
        db.User.findOne({
            where: {
                email: req.cookies.recordame
             },
         }).then((usuarioLogueado) => {
            req.session.usuarioLogueado = usuarioLogueado;
            });
    }
    next();
}

module.exports = middRecordame; 