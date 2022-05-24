const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema(
    {
        topic: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50,
        },
    },
    { timestamps: true }
);

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;