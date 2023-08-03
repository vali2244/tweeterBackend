const mongoose=require("mongoose")

const tweet_schma=new mongoose.Schema({
TEXT:{type:String, require:[true, 'please enter the text']},

user:String,

time:{type:Date ,
    default:Date.now
    }


})

module.exports=  mongoose.model('Tweeter',tweet_schma)