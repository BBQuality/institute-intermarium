const express = require('express');
const router = express.Router();
const fs = require('fs');

const ArticlePreviewModel = require('../../models/models')

// Post One Methond
/*
router.post('/postOne', async (req, res) => {
    const newData = new ArticlePreviewModel({
        title: req.body.title,
        href: req.body.href,
        imgLink: req.body.imgLink,
        dateAddedTxt: req.body.dateAddedTxt
    });

    try{
        const savedData = await newData.save();
        res.status(200).json(savedData);
    }
    catch(error){
        console.log(error);
        res.status(400).json({message: 'error'});
    }
});
*/

// Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await ArticlePreviewModel.find();
        res.json(data);
    }
    catch(error){
        console.log(error);
        // read hardcoded file in case of error
        const data = fs.readFileSync('./mock_db_data/test.articlepreviews.json', {encoding: 'utf-8'})
        const dataJson = JSON.parse(data);
        console.log(dataJson);
        res.json(dataJson)
        //res.status(500).json({message: 'error'});
    }
});


module.exports = router;