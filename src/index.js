const express =require('express');
const path = require('path');

require('./db/db');
require('./models/games');
require('./models/images');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname,'..','public')));

app.listen(process.env.PORT,() => {
    console.log('Server Started');
});