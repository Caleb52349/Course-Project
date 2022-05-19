var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,      
    },
    email:{
        type: String,
        required: [true,'Please enter an Email'],
        unique: true
    },
    role:   {
        type: Number,
        default: 0
    }
},{timestamps:true});

const User = mongoose.model('User',UserSchema);

module.exports = User;