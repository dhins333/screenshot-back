const mongoose = require('mongoose');

mongoose.connect(process.env.DB,{useNewUrlParser:true,useUnifiedTopology:true},(err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('Connected to DB');
})