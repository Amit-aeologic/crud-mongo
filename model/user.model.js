const mongoose = require('mongoose')
const validator = require('validator');
require('dotenv').config()
const UserSchema = new mongoose.Schema({
   
    name: {
        type: String,
        required: true,
        trim: true
    },
    emailid: {
        type: String,
        required: true,
        trim: true

    },
    contact: {
        type: Number,
        required: true,
        trim: true
    },
    address:{
        type: String,
        required: true,
        trim: true
    }
    },
{
    timestamps:false
});
const UserModel = mongoose.model('user',UserSchema )

module.exports = UserModel