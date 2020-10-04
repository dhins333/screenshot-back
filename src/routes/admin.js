const express = require('express');
const auth = require('../auth/auth');
const Games = require('../models/games');
const Images = require('../models/images');
const router = new express.Router();

router.post('/admin/games/add',auth,async (req,res) => {
    try{
        const game = new Games({
            name:req.body.name,
            thumbnail:req.body.thumbnail
        });
        await game.save();
        res.status(200).send('Game added to DB');
    }
    catch(e){
        console.log(e);
        res.status(500).send('Internal Server Error');
    }

})

router.post('/admin/screenshots/add',auth,async (req,res) => {
    try{
        for (screenshot of req.body.screenshots){
            const image = new Images({
                url:screenshot,
                game:req.body.own_id
            });
            await image.save();
            console.log(`${screenshot} saved to DB`);
        }
        res.status(200).send('Images added to DB');
    }
    catch(e){
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router;