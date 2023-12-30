import { Router } from 'express';
import * as ProductsController from '../controllers/products.controller.js'
import { verifyToken } from '../middlewares/index.js'

const router = Router();

router.get('/', ProductsController.getProducts);

router.post('/', verifyToken, ProductsController.createProduct);

router.get('/:productId', ProductsController.getProductById);

router.put('/:productId', verifyToken, ProductsController.updateProductById);

router.delete('/:productId', verifyToken, ProductsController.deleteProductById);

export default router