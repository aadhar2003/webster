

const router=require('express').Router();
const landing=require('../controllers/landingController');
router.get('/',landing.ok);

module.exports=router;