const mongoose=require("mongoose")

const user_schma=new mongoose.Schema({
name:String,
email:String,
password:String,
createdAt:{type:Date,
    default:Date.now
    }


})

module.exports=  mongoose.model('User',user_schma)