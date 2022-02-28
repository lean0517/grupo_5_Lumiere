const fs = require('fs');
const path = require('path');
const usuariosFilePath = path.join(__dirname, '../data/users.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const bcrypt = require('bcryptjs');
const User = require ('../models/User')
const { validationResult } = require('express-validator');


const controller = {
    
    registro: (req, res) => {
		res.render(path.resolve(__dirname, "../views/users/registrate.ejs" ));
	},
        
    storeDeUsuarios: (req, res) => {
		let resultValidation = validationResult(req);
		if (resultValidation.errors.length>1){
				res.render ('./users/registrate',{
				errors: resultValidation.mapped(),
				oldData: req.body,
			})
		}else{
			
			let unaOpcionQueNoUsemos=JSON.stringify(req.body)
			const listadoDeUsuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));
			let newID =listadoDeUsuarios[listadoDeUsuarios.length-1].id + 1;
			
			let contraseñaEncriptada= bcrypt.hashSync(req.body.contraseña, 10 )
			newUser={
				id:newID,
				...req.body,
				contraseña:contraseñaEncriptada,
				ConfirmarContraseña:contraseñaEncriptada,
				userImage:req.file == undefined ? "default-image.png":req.file.filename
			}
			
			console.log(newUser)
	
			listadoDeUsuarios.push(newUser);
			let usuariosJSON=JSON.stringify(listadoDeUsuarios,null, 2);
			fs.writeFileSync(usuariosFilePath,usuariosJSON);
			res.send('Usuario cargado exitosamente')
			}



	},


	
}

module.exports=controller



			// let userInDB = User.findByField('email', req.body.email);
	
			// if (userInDB) {
			// 	return res.render ((path.resolve(__dirname, "../views/users/registrate.ejs" )), {
			// 		errors:{
			// 			email:{
			// 				msg:'Este email ya esta registrado'
			// 			}
			// 		},
			// 		oldData:req.body
			// 	});
			// }