const {Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const UserSchema = new Schema(
{
    username: {
    type: String,
    required: true,
    trim: true
},

email:{
    type: String,
    required: true,
    trim: true
},

thoughts:[
    {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }
],




});


const User = model('User', UserSchema);
module.exports = User;


