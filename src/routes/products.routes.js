import { Router } from 'express';
import * as ProductsController from '../controllers/products.controller.js'
import { authJwt } from '../middlewares/index.js'

const router = Router();

router.get('/', ProductsController.getProducts);

router.post('/', [authJwt.verifyToken, authJwt.isModerator], ProductsController.createProduct);

router.get('/:productId', ProductsController.getProductById);

router.put('/:productId', [authJwt.verifyToken, authJwt.isAdmin], ProductsController.updateProductById);

router.delete('/:productId', [authJwt.verifyToken, authJwt.isAdmin], ProductsController.deleteProductById);

export default router