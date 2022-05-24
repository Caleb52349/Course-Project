const Topic = require('../models/Topic');

exports.create = async (req, res) => {
	const { topic } = req.body;

	try {
		const topicExist = await Topic.findOne({ topic });
		if (topicExist) {
			return res.status(400).json({
				errorMessage: `${topic} already exists`,
			});
		}

		let newTopic = new Topic();
		newTopic.topic = topic;

		newTopic = await newTopic.save();

		res.status(200).json({
			topic: newTopic,
			successMessage: `${newTopic.topic} was created!`,
		});
	} catch (err) {
		console.log('topic create error: ', err);
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};

exports.readAll = async (req, res) => {
	try {
		const topics = await Topic.find({});

		res.status(200).json({
			topics,
		});
	} catch (err) {
		console.log('topic readAll error: ', err);
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};