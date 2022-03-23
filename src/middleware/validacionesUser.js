const {check} = require('express-validator');
const path = require ('path');

let validateRegistro = [
    check('email').notEmpty().withMessage('El email es requerido').bail()
                .isEmail().withMessage('Debe ingresar un email valido'),             
   check('full_name').notEmpty().withMessage('El nombre completo es requerido').bail()
                .isLength({min:5}).withMessage('El nombre debe tener mas de 5 caracteres'),
    check('user').notEmpty().withMessage('El usuario es requerido').bail()
                .isLength({min:5}).withMessage('El usuario debe tener mas de 5 caracteres'),
    check('fav_category_id').notEmpty().withMessage ('Debe elegir su categoria favorita'),
    check('avatar_id').custom((value, { req }) =>{
        let file =req.file;
        let extencionesValidas = ['.jpg', 'jpeg', 'png' ];

        //Aca le decimos que si o si tiene que haber algo en el campo imagen
        if (!file){
            throw new Error ('Tienes que subir una imagen');
        }else{
            //Aca le decimos que lo que hay en el campo imagen de ser formato jpg, jpeg o png
            let extencionArchivo = path.extname(file.originalname);
            if (!extencionesValidas.includes(extencionArchivo)) {
                throw new Error (`Las extensiones validas son ${extencionesValidas.join(', ')}`)
            }
        }
        
        return true;
    })
]

module.exports=validateRegistro;