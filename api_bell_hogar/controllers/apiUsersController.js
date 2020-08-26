let db = require('../database/models');
const sequelize = db.sequelize;

let apiUsersController = {
    'usersCount':function(req,res){
        db.User.count()
            .then(function(usersCount){
                let respuesta = {
                    meta: {
                        status: 200,
                        total: usersCount,
                    },
                    data: usersCount
                }
                res.json(respuesta)
            })
    },
    'usersEmail':function(req,res){
        db.User.findAll({
            attributes: {exclude:["dni_cuit","is_admin","image","phone","phone","created_at","updated_at","password","address_id","payment_id"]},
        })
            .then(function(usersEmail){
                let respuesta = {
                    meta:{
                        status:200,
                        total: usersEmail.length
                    },
                    data: usersEmail
                }
                res.json(respuesta)
            })
    },
    'usersDetail': function(req,res){
        db.User.findByPk(req.params.id,{
            attributes: {exclude:["created_at","updated_at","password","address_id","payment_id"]},
        })
            .then(function(user){
                let respuesta = {
                    meta:{
                        status:200,
                        total: user.length
                    },
                    data: user
                }
                res.json(respuesta)
            })
    }
}

module.exports = apiUsersController;