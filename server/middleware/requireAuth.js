const jwt = require('jsonwebtoken')
const User = require("../models/user.model");

module.exports= (req,res,next)=>{
    const JWT_SECRET = process.env.JWT_SECRET
    const {auth} = req.headers;
    if(!auth){
        return res.status(401).json({err:"Please login!"})
    }
    const token = auth.replace("Bearer","")
    jwt.verify(token,JWT_SECRET,(error,payload)=>{
        if(error){
            return res.status(401).json({error:"You must be logged in"});
        }

        const {_id} = payload
        User.findById(_id)
            .then(userData=>{
                req.user = userData
                next();
            })
    })
}