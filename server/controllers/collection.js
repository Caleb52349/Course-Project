const Collection = require('../models/collection');


exports.create = async (req, res) => {
	const { filename } = req.file;
	const {
		collectionName,
		collectionDesc,
		collectionTopic,
		collectionAuthour,
		collectionRate,
        collectionTag,
	} = req.body;

	try {
		let collection = new Collection();
		collection.fileName = filename;
		collection.collectionName = collectionName;
		collection.collectionDesc = collectionDesc;
		collection.collectionTopic = collectionTopic;
		collection.collectionAuthour = collectionAuthour;
		collection.collectionRate = collectionRate;
        collection.collectionTag = collectionTag;

		await collection.save();

		res.json({
			successMessage: `${collectionName} was created`,
			collection,
		});
	} catch (err) {
		console.log(err, 'collectionController.create error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};