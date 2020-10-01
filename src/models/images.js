const mongoose = require('mongoose');

const Images = mongoose.model('Images',{
    url:{
        type:String,
        required:true
    },
    game:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Games'
    }
})

module.exports = Images;