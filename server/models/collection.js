const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const collectionSchema = new mongoose.Schema(
	{
		collectionName: {
			type: 'String',
			required: true,
			trim: true,
			maxlength: 60,
		},
		collectionDesc: {
			type: 'String',
			trim: true,
		},
		collectionTopic: {
			type: ObjectId,
			ref: 'Topic',
			required: true,
		},
		fileName: {
			type: 'String',
			required: true,
		},
		collectionAuthour: {
			type:'String',
			required: true,
		},

		collectionRate: {
			type: Number,
			required: true,
		},
		collectionTag: {
			type: [String],
			ref: 'Tag',
		},
		
	},
	{ timestamps: true }
);

collectionSchema.index({ collectionName: 'text' });
const collection = mongoose.model('collection', collectionSchema);

module.exports = collection;