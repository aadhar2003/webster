const express=require('express');
const app=express();
const session=require('express-session');
const hbs=require('hbs');
const path=require('path');
app.set('view engine', 'hbs');
const PORT=4444;
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));


app.use(session({
    secret: 'keyboard cat', 
    resave: false,
    saveUninitialized: true
}));
const landing=require('./routes/landing');
app.use('/',landing);

const mainHandler=require('./routes/login');
app.use('/login',mainHandler);

const Signup=require('./routes/signup');
app.use('/signup',Signup);

const profile=require('./routes/profile');
app.use('/home',profile);

const bmi=require('./routes/bmi')

app.use('/bmi',bmi);
 


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);

})
