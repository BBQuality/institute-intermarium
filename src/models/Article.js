const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const textPostSchema = require('./TextPostSchema.js')

const articleSchema = new Schema({
    ...textPostSchema.obj
});

module.exports = model('Article', articleSchema)