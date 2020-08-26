const multer = require('multer'); // file uploads
const path = require('path');

// Start File uploads config ---------------------------------------------------------
var storage = multer.diskStorage({
  destination:  path.join(__dirname,'../public/images/avatars'),
  filename: function (req, file, cb) {
    let fechaActual = new Date();
    cb(null, req.body.nombre + ' - ' + req.body.id + fechaActual.getFullYear() + "-" + path.extname(file.originalname));
  }
});

var upload = multer({ 
  storage: storage,
  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname);
    ext = ext.toLowerCase(); //para convertir a minuscula extension de image en mayuscula

    if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
        return callback(new Error('El avatar sólo puede ser imagen JPG, PNG, JPEG.'))
      }
    callback(null, true)
  }
}).single('image');


// End File uploads config ---------------------------------------------------------


let uploadFile = {
  uploadFile: function (req,res,next) {
    upload(req, res, function(err){ // invocamos la función upload de multer para subir el archivo de avatar
      if(err) {
        console.log(err);
        return res.render("users/register", {errors: err});
      } else { next(); } // todo salió bien, continuamos al próximo middleware
    });
  }
}
module.exports = uploadFile;
