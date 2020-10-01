const mongoose = require('mongoose');

const GamesSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    }
})

const Games = mongoose.model('Games',GamesSchema);

GamesSchema.virtual('images',{
    ref:'Images',
    localField:'_id',
    foreignField:'game'
})

module.exports = Games;