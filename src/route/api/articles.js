const express = require('express');
const router = express.Router();

const articlesOps = require("./../../dbOps/articlesOps")


// router.post('/postOne', async(req, res) => {
//     const reqObj = req.body;

//     const newData = new ArticleModel({
//         title: reqObj.title,
//         content : reqObj.content,
//         author: new mongoose.Types.ObjectId(reqObj.authorId),
//         summary: reqObj.summary
//     });
//     // console.log({title: reqObj.title,
//     //     content : reqObj.content,
//     //     author: reqObj.authorId,
//     //     summary: reqObj.summary});
//     // console.log(newData);
//     try{
//         const savedData = await newData.save();
//         res.status(201).json(savedData);
//     }
//     catch(error){
//         console.log(error);
//         res.status(400).json(error);
//     }
// });

router.get('/getall', async(req, res) => {
    console.log("getall")
    try{
        const data = await articlesOps.getAllArticles(true);
        res.json(data);
    }
    catch(error){
        console.log(error);
        res.status(400);
    }
});

router.get('/getOne/:id', async(req, res) => {

    try{
        let id = req.params.id;
        const article = await articlesOps.getArticle(id);
        if(article){
            res.json(article);
        }
        else{
            res.status(404);
        }
    }
    catch(error){
        console.log(error);
        res.status(500);
    }
});

module.exports = router;