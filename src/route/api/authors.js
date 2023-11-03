const express = require('express');
const router = express.Router();

const AuthorModel = require("../../models/Author")

router.post('/postOne', async(req, res) => {
    const reqObj = req.body;

    const newData = new AuthorModel({
        firstName: reqObj.firstName,
        lastName : reqObj.lastName,
        about: reqObj.about,
        title: reqObj.title
    });

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
        const data = await AuthorModel.find();
        res.json(data);
    }
    catch(error){
        console.log(error);
        res.status(400).json(error);
    }
});

module.exports = router;