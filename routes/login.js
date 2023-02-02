const router=require('express').Router();
const passport=require('../passport');
const loginHander=require('../controllers/loginHandler');

router.get('/',loginHander.start);  

router.post('/',passport.authenticate('local', { failureRedirect: '/' }),
function(req, res) {
  res.redirect('/home');
});

module.exports=router;