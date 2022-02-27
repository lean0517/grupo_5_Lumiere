const fs = require('fs');
const path = require('path');
const usuariosFilePath = path.join(__dirname, '../data/users.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const bcrypt = require('bcryptjs');

const controller = {
    
    registro: (req, res) => {
		res.render("./users/registrate");
	},
        
    storeDeUsuarios: (req, res) => {
	
		let unaOpcionQueNoUsemos=JSON.stringify(req.body)
		const listadoDeUsuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));
		let newID =listadoDeUsuarios[listadoDeUsuarios.length-1].id + 1;
		
		let contraseñaEncriptada= bcrypt.hashSync(req.body.contraseña, 10 )
		newUser={
			id:newID,
			...req.body,
			contraseña:contraseñaEncriptada,
		    ConfirmarContraseña:contraseñaEncriptada,
			image:req.file == undefined ? "default-image.png":req.file.filename
		}
		
		console.log(newUser)

		listadoDeUsuarios.push(newUser);
		let usuariosJSON=JSON.stringify(listadoDeUsuarios,null, 2);
		fs.writeFileSync(usuariosFilePath,usuariosJSON);
		res.send('Usuario cargado exitosamente')

	},


	
}

module.exports=controller