const express=require('express')
const app=express()

const cors=require('cors')
const bodyparser=require('body-parser')



app.use(cors())
app.use(bodyparser())
app.get('/',(req,res)=>{
    res.send("vali")
})

const user=require("./router/user")
app.use("/api/v4",user)

const tweet=require("./router/tweeter")
app.use("/api/v4",tweet)


module.exports=app