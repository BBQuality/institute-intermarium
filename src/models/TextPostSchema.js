const mongoose = require('mongoose')
const {Schema, SchemaTypes} = mongoose;

const textPostSchema = new Schema({
    title : {
        required: true,
        type: String
    },
    content: {
        required: true,
        type: [
            {
                images: [String],
                heading: String,
                text: String
            }
        ],
        default: undefined
    },
    summary: String,
    author: {
        type: SchemaTypes.ObjectId,
        ref: 'Author',
        required: false
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
    updatedAt: Date
});

textPostSchema.pre('save', function(next){
    this.updatedAt = Date.now();
    next();
});

module.exports = textPostSchema;