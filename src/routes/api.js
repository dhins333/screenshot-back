const express = require('express');
const Games = require('../models/games');

const router = new express.Router();

router.get('/games',async (req,res) => {
    try{
        const games = await Games.find({});
        res.status(200).send(JSON.stringify(games));
    }
    catch(e){
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router;