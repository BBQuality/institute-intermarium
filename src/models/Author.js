const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const authorSchema = new Schema({
    firstName : {
        required: true,
        type: String
    },
    lastName : {
        required: true,
        type: String
    },
    about : {
        required: false, 
        type: String
    },
    title : {
        required : false,
        type : String
    }
});

const Author = model('Author', authorSchema)
module.exports = Author;
