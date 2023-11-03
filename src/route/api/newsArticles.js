const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const NewsArticleModel = require("../../models/NewsArticle")


router.post('/postOne', async(req, res) => {
    const reqObj = req.body;

    const newData = new NewsArticleModel({
        title: reqObj.title,
        content : reqObj.content,
        author: new mongoose.Types.ObjectId(reqObj.authorId),
        summary: reqObj.summary
    });
    // console.log({title: reqObj.title,
    //     content : reqObj.content,
    //     author: reqObj.authorId,
    //     summary: reqObj.summary});
    // console.log(newData);
    try{
        const savedData = await newData.save();
        res.status(201).json(savedData);
    }
    catch(error){
        console.log(error);
        res.status(400).json(error);
    }
});

router.get('/getall', async(req, res) => {
    try{
        const data = await NewsArticleModel.find();
        res.json(data);
    }
    catch(error){
        console.log(error);
        res.status(400).json(error);
    }
});

module.exports = router;