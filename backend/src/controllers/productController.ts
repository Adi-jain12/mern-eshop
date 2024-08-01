import { Request, Response } from 'express';
import Product from '../models/products';

export const getAllProducts = async (req: Request, res: Response) => {
	try {
		const product = await Product.find().sort('-updatedAt');

		res.json(product);
	} catch (error) {
		res.status(500).json({ message: 'Error getting products' });
	}
};

export const getProduct = async (req: Request, res: Response) => {
	try {
		const { productId } = req.params;

		const product = await Product.findById(productId);

		if (!product) {
			res.status(400).json({ message: 'No product found!' });
		}

		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: 'Error getting product' });
	}
};

export const createProduct = async (req: Request, res: Response) => {
	try {
		const newProduct = new Product(req.body);
		newProduct.updatedAt = new Date();

		await newProduct.save();

		res.status(201).send(newProduct);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Error creating product' });
	}
};
