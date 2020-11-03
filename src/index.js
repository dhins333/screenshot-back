const express =require('express');
const path = require('path');
const adminRouter = require('./routes/admin');
const apiRouter = require('./routes/api');
require('./db/db');
require('./models/games');
require('./models/images');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname,'..','public')));
app.use(adminRouter);
app.use(apiRouter);

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'..','public','index.html'));
})

app.listen(process.env.PORT,() => {
    console.log('Server Started');
});