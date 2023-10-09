const mongoose = require('mongoose');

// Model config

const articlePreviewSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    href: {
        require: true,
        type: String
    },
    imgLink: {
        require: true,
        type: String
    },
    dateAddedTxt: {
        require: true,
        type: String
    }
});

module.exports = mongoose.model('ArticlePreview', articlePreviewSchema)