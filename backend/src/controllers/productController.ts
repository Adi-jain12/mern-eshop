import { Request, Response } from 'express';

export const getProducts = async (req: Request, res: Response) => {
	try {
		const product = await Products.findOne({ reqid });
	} catch (error) {
		res.status(500).json({ message: 'Error getting product details' });
	}
};
