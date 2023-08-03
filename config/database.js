const mongoose=require("mongoose")
// mongodb+srv://syedvali221:Babavali221@cluster0.zlfooct.mongodb.net/?retryWrites=true&w=majority"


exports. connect_db=await=()=>{
    mongoose
    .connect("mongodb+srv://syedvali221:Babavali221@cluster0.zlfooct.mongodb.net/?retryWrites=true&w=majority")
    .then((res)=>console.log(`mongo is connected at ${res.connection.host}`))
    .catch((err)=>console.log(err));
}


