const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: String
        },

        reactionBody: {
            type: String,
            required: true,
            trim: true
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
})

const Reaction = model('Reaction', ReactionSchema);
module.exports = Reaction;