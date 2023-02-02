const router=require('express').Router();
const signupHandler=require('../controllers/signupHandler');
router.get('/',signupHandler.start);
router.post('/',signupHandler.save);
module.exports=router;