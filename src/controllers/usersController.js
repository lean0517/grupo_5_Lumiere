const fs = require('fs');
const path = require('path');
const usuariosFilePath = path.join(__dirname, '../data/users.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const bcrypt = require('bcryptjs');
// const User = require ('../models/User')
const { validationResult } = require('express-validator');
const sessions=require ('express-session');
const db = require("../database/models")
const sequelize =db.sequelize;
const Op =db.Sequelize.Op;


const controller = {
    
    registro: (req, res) => {
		res.render("../views/users/registrate.ejs" );
	},
        
    storeDeUsuarios: async (req, res) => {
		// let userInDB = User.findByField('email', req.body.email);
		
		let userInDb
		await db.user.findOne({
			
			where : {
				email:  req.body.email
			}
		})
		
		.then ((pepe) =>{
		 userInDb=pepe
		})		
		if (userInDb) {
			return res.render ("../views/users/registrate.ejs" , {
				errors:{
					email:{
						msg:'Este email ya esta registrado'
					}
					
				},
				oldData:req.body
				
			})
		}
		let resultValidation = validationResult(req);
		if (resultValidation.errors.length>1){
			res.render ('./users/registrate',{
			errors: resultValidation.mapped(),
			oldData: req.body,
		})
		}		
		else{
			
		// 	let unaOpcionQueNoUsemos=JSON.stringify(req.body)
		// 	const listadoDeUsuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));
		// 	let newID =listadoDeUsuarios[listadoDeUsuarios.length-1].id + 1;
			
		// 	let contraseñaEncriptada= bcrypt.hashSync(req.body.contraseña, 10 )
		// 	newUser={
		// 		id:newID,
		// 		...req.body,
		// 		contraseña:contraseñaEncriptada,
		// 		ConfirmarContraseña:contraseñaEncriptada,
		// 		userImage:req.file == undefined ? "default-image.png":req.file.filename
		// 	}
			
		// 	console.log(newUser)
	
		// 	listadoDeUsuarios.push(newUser);
		// 	let usuariosJSON=JSON.stringify(listadoDeUsuarios,null, 2);
		// 	fs.writeFileSync(usuariosFilePath,usuariosJSON);
		// 	res.send('Usuario cargado exitosamente')
		// 	}
		let contraseñaEncriptada = bcrypt.hashSync(req.body.password, 10 )
		let confirmEncriptada = bcrypt.hashSync(req.body.confirm_password, 10 )
		db.user.create({
			
			...req.body,
			password:contraseñaEncriptada,
			confirm_password:confirmEncriptada,
			avatar_id:req.file == undefined ? "default-image.png":req.file.filename
			})
			return	res.render('users/newUser')
		
		}
		
	},
	login: function (req, res){
        return res.render('users/login')
    },

	procesoLogin: async (req, res) =>{
		let userTologin
		console.log (req.body)
		await db.user.findOne ({
			where : {
				email:  req.body.email
			}
		})
		.then((usuario)=>{
			userTologin=usuario
		})
		if (userTologin){
			console.log(userTologin)
			let passwordCorrecta = bcrypt.compareSync (req.body.password, userTologin.password);
			if(passwordCorrecta){
				req.session.userLogged = userTologin;
				return res.redirect ('home');
			}
		}
		return res.render ( "../views/users/login.ejs" ,{
			errors: {
				email: {
					msg:'Las credenciales son ivalidas'
				}
			}
		});
	
	},
	perfil:(req,res)=> {
		let users =req.session.userLogged;
				return res.render('home', {
					users : users
				})
				
				
	},
	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}
	
}

module.exports=controller
