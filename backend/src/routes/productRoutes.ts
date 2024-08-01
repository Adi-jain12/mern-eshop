import express from 'express';
import {
	createProduct,
	getAllProducts,
	getProduct,
} from '../controllers/productController';

const router = express.Router();

router.get('/', getAllProducts);

router.get('/:productId', getProduct);

router.post('/', createProduct);

export default router;
