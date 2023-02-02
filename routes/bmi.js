const router=require('express').Router();
const control=require('../controllers/bmiController');
router.post('/',control.calculate);


module.exports=router;