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
    const product = await Product.find()
    res.status(200).json(product)
}

export const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.productId)
    res.status(200).json(product)
}

export const updateProductById = (req, res) => { }

export const deleteProductById = (req, res) => { }