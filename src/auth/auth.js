const auth = async (req,res,next) => {
    if(req.body.pass === process.env.PASS){
        next();
    }
    else{
        res.status(401).send('Wrong password');
    }
}

module.exports = auth;