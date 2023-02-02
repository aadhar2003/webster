const user = require("../models/user");

module.exports.start=(req,res,next)=>{
    res.render('signup');
}
module.exports.save=(req,res,next)=>{
    const {username,password}=req.body;
    let newUser=new user({username,password});
    newUser.save();
    res.redirect('/');
}