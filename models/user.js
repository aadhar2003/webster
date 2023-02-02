const mongoose=require('mongoose');
 
mongoose.connect('mongodb://127.0.0.1:27017/users');

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('user',UserSchema);