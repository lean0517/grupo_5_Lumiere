const fs = require('fs');
const path = require('path');
const db = require("../database/models")
const sequelize =db.sequelize;
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	
	index: (req, res) => {
		// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		// res.render("products",{productos:products})
		db.product.findAll().then((products)=>{
			res.render("products/productos", {productos:products})
		});
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		// let idProducto=req.params.id;
		// productoMostrar=products.find(element => element.id == idProducto)
		// res.render("products/detail",{productos:productoMostrar})
		db.product.findByPk(req.params.id).then((product)=>{
			res.render("products/detail",{productos:product})
		})

	},

	// Create - Form to create
	create: (req, res) => {
		res.render("./products/product-create-form");
	},
	
	// Create -  Method to store
	store: (req, res) => {
		
		// let unaOpcionQueNoUsemos=JSON.stringify(req.body)
		// let newID =products[products.length-1].id + 1;
		// console.log("body",req.body)
		// newProduct={
		// 	id:newID,
		// 	...req.body,
		// 	image:req.file == undefined ? "default-image.png":req.file.filename
		// }
		// products.push(newProduct);
		// let productsJSON=JSON.stringify(products,null, 2);
		// fs.writeFileSync(productsFilePath,productsJSON);
		// res.redirect("/products")
		db.product.create({
			...req.body,
			image:req.file == undefined ? "default-image.png":req.file.filename
			}).then(()=>{
			res.redirect("/products")
		});

	},

	// Update - Form to edit
	edit: (req, res) => {
		// let idProducto=req.params.id;
		// productoMostrar=products.find(element => element.id == idProducto)
		// res.render("products/product-edit-form",{productToEdit:productoMostrar})
		db.product.findByPk(req.params.id).then((product)=>{
		res.render("products/product-edit-form",{productos:product})})
		
	},
	// Update - Method to update
	update: (req, res) => {
		// let id=req.params.id

		// let modifiedProduct =products.map(element =>{
		// 	if (element.id ==id){
		// 		return element ={
		// 			id:id,
		// 			...req.body,
		// 			image: req.file ==undefined ? element.image : req.file.filname
		// 		}
		// 	}
		// 	return element;
		// })

		// let productsJSON=JSON.stringify(modifiedProduct,null, 2);
		// fs.writeFileSync(productsFilePath,productsJSON);
		// res.redirect("/products")
		db.product.update({
			name:req.body.name,
			price:req.body.price,
			category:req.body.id_category,
			discount:req.body.discount,
			description:req.body.description,
			// image: req.file ==undefined ? product.image : req.file.filname
		},{
			where: {
				id_product:req.params.id
			}
		})
		res.redirect("/products")
	
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// let idProducto=req.params.id;
		// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		// let resultado=products.filter(element=>idProducto!=element.id)

		// let productsJSON=JSON.stringify(resultado,null, 2);
		// fs.writeFileSync(productsFilePath,productsJSON);

		// res.redirect("/products")
		db.product.destroy({
			where: {
				id_product:req.params.id
			}
		})
		return res.redirect("/products")
	
	}
};

module.exports = controller;