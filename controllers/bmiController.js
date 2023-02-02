module.exports.calculate=(req,res,next)=>{
    const {weight,height}= req.body;
    const bmi=weight/(height*height);
    if(bmi<18.5){
        res.render('underweight');
    }
    else if(bmi>18.5 && bmi<24.9){
        res.render('healthy');
    }
    else if(bmi>25 && bmi<29.9){
        res.render('overweight');
    }
    else{
        res.render('obese');
    }


}