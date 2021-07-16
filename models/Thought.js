const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
    {
       thoughtText: {
           type: String
       },

        createdBy: {
            type: String,
            required: true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },

        users: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        // prevents virtuals from creating duplicate of _id as `id`
        id: false
    })



const Thought = model('Thought', ThoughtSchema);
module.exports = Thought;