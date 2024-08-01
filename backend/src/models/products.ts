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
	stock: {
		type: Number,
		required: [true, 'Stock is required'],
		min: [1, 'Stock must be greater than 1'],
	},

	imageSrc: { type: String, required: true },

	unitPrice: {
		type: Number,
		required: [true, 'Product price is required'],
		min: [0, 'Price cannot be negative'],
	},

	deliveryPrice: { type: Number, required: true },

	color: {
		type: String,
		required: true,
	},

	updatedAt: {
		type: Date,
		required: true,
	},

	// category: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'Category',
	// 	required: [true, 'Product category is required'],
	// },
	// stock: {
	// 	type: Number,
	// 	required: [true, 'Product stock is required'],
	// 	min: [0, 'Stock cannot be negative'],
	// },
	// ratings: [
	// 	{
	// 		user: {
	// 			type: mongoose.Schema.Types.ObjectId,
	// 			ref: 'User',
	// 			required: true,
	// 		},
	// 		rating: {
	// 			type: Number,
	// 			required: [true, 'Rating is required'],
	// 			min: [1, 'Rating must be at least 1'],
	// 			max: [5, 'Rating cannot be more than 5'],
	// 		},
	// 		comment: {
	// 			type: String,
	// 			trim: true,
	// 		},
	// 	},
	// ],
});

const Product = mongoose.model('Product', productSchema);

export default Product;
