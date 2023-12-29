import { Router } from 'express';
import * as ProductsController from '../controllers/products.controller.js'

const router = Router();

router.get('/', ProductsController.getProducts);

router.post('/', ProductsController.createProduct);

router.get('/:productId', ProductsController.getProductById);

router.put('/:productId', ProductsController.updateProductById);

router.delete('/:productId', ProductsController.deleteProductById);

export default router