const ArticleModel = require("./../models/Article")
const ObjectId = require('mongoose').Types.ObjectId;


async function getAllArticles(withAuthors=true){
    if(withAuthors){
        return await ArticleModel.find().populate("author");
    }
    else
    {
        return await ArticleModel.find();
    }

}

async function getArticle(id, withAuthors=true){
    if(checkObjectIdValid(id)){
        id = new ObjectId(id)
    }else{
        return null;
    }

    if(withAuthors){
        return await ArticleModel.findById(id).populate("author")
    }
    else{
        return await ArticleModel.findById(id);
    }
}

function checkObjectIdValid(id){
    return ObjectId.isValid(id) ? 
                String(new ObjectId(id)) === id ? 
                    true  
                    : false 
                : false
}

module.exports.getAllArticles = getAllArticles
module.exports.getArticle = getArticle