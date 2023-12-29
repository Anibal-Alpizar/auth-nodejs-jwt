import Product from '../models/Product.js'

export const createProduct = async (req, res) => {

    const { name, category, price, imgURL } = req.body
    const newProduct = new Product({
        name: name,
        category: category,
        price: price,
        imgURL: imgURL
    })
    const productSaved = await newProduct.save()
    res.status(201).json(productSaved)
}

export const getProducts = async (req, res) => {
    const products = await Product.find()
    res.status(200).json(products)
}

export const getProductById = (req, res) => { }

export const updateProductById = (req, res) => { }

export const deleteProductById = (req, res) => { }