const {check} = require('express-validator');
const path = require ('path');

let validateRegistro = [
    check('email').notEmpty().withMessage('el email es requerido').bail()
                .isEmail().withMessage('Debe ingresar un email valido'),             
   check('nombreCompleto').notEmpty().withMessage('el nombre completo es requerido').bail()
                .isLength({min:5}).withMessage('El nombre es muy corto'),
    check('usuario').notEmpty().withMessage('el usuario es requerido').bail()
                .isLength({min:5}).withMessage('El usuario debe tener mas de 5 letras'),
    check('categrias').notEmpty().withMessage ('Debe elegir su categoria favorita'),
    check('userImage').custom((value, { req }) =>{
        let file =req.file;
        let extencionesValidas = ['.jpg', 'jpeg', 'png' ];

        
        if (!file){
            throw new Error ('Tienes que subir una imagen');
        }else{
            let extencionArchivo = path.extname(file.originalname);
            if (!extencionesValidas.includes(extencionArchivo)) {
                throw new Error (`Las extensiones validas son ${extencionesValidas.join(', ')}`)
            }
        }
        
        return true;
    })
]

module.exports=validateRegistro;