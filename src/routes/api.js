const express = require('express');
const Games = require('../models/games');
const Images = require('../models/images');

const router = new express.Router();

router.get('/api/games',async (req,res) => {
    try{
        const games = await Games.find({});
        res.status(200).send(JSON.stringify(games));
    }
    catch(e){
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
})

router.get('/api/screenshots/:id',async (req,res) => {
    try{
        const images = await Images.find({game:req.params.id}).select({url:1,_id:0});
        res.status(200).send(JSON.stringify(images));
    }
    catch(e){
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router;