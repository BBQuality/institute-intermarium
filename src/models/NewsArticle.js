const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const textPostSchema = require('./TextPostSchema.js')

// const newsArticleSchema = new Schema({
//     ...textPostSchema.obj
// });

module.exports.NewsArticle = model('NewsArticle', textPostSchema)