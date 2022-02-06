const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	
	index: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.render("products",{productos:products})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let idProducto=req.params.id;
		productoMostrar=products.find(element => element.id == idProducto)
		res.render("products/detail",{productos:productoMostrar})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render("./products/product-create-form");
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// return res.json(req.file)
		let unaOpcionQueNoUsemos=JSON.stringify(req.body)
		let newID =products[products.length-1].id + 1;
		// let newProduct ={
		// 	id:newID,
		// 	name:req.body.name,
		// 	price: req.body.price,
		// 	discount:req.body.discount,
		// 	categoy:req.body.category,
		// 	description:req.body.description,
		// 	image:"default-image.png"
		// }
		console.log("body",req.body)
		newProduct={
			id:newID,
			...req.body,
			image:req.file == undefined ? "default-image.png":req.file.filename
		}
		
		products.push(newProduct);
		let productsJSON=JSON.stringify(products,null, 2);
		fs.writeFileSync(productsFilePath,productsJSON);
		res.redirect("/products")

	},

	// Update - Form to edit
	edit: (req, res) => {
		let idProducto=req.params.id;
		productoMostrar=products.find(element => element.id == idProducto)
		res.render("products/product-edit-form",{productToEdit:productoMostrar})
	},
	// Update - Method to update
	update: (req, res) => {
		let id=req.params.id

		let modifiedProduct =products.map(element =>{
			if (element.id ==id){
				return element ={
					id:id,
					...req.body,
					image: req.file ==undefined ? element.image : req.file.filname
				}
			}
			return element;
		})

		let productsJSON=JSON.stringify(modifiedProduct,null, 2);
		fs.writeFileSync(productsFilePath,productsJSON);
		res.redirect("/products")

	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		res.send("datos eliminados")
	}
};

module.exports = controller;