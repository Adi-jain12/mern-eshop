import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Product name is required'],
		trim: true,
	},
	description: {
		type: String,
		required: [true, 'Product description is required'],
		trim: true,
	},
	price: {
		type: Number,
		required: [true, 'Product price is required'],
		min: [0, 'Price cannot be negative'],
	},
	// category: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'Category',
	// 	required: [true, 'Product category is required'],
	// },
	stock: {
		type: Number,
		required: [true, 'Product stock is required'],
		min: [0, 'Stock cannot be negative'],
	},
	ratings: [
		{
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
				required: true,
			},
			rating: {
				type: Number,
				required: [true, 'Rating is required'],
				min: [1, 'Rating must be at least 1'],
				max: [5, 'Rating cannot be more than 5'],
			},
			comment: {
				type: String,
				trim: true,
			},
		},
	],
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
});

const Product = mongoose.model('Product', productSchema);

export default Product;
