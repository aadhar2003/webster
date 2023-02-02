const router=require('express').Router();
const passport=require('../passport');
const profileHandler=require('../controllers/profileHandler');
router.use(passport.initialize());
router.use(passport.session());
router.get('/', isLoggedin,(req, res) => {
    res.render('profile')

})
function isLoggedin(req,res,next){
    if(req.isAuthenticated()) return next();
    res.redirect('/home');
 }

module.exports=router;