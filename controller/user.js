const User=require('../model/user')


exports.create_user=async(req,res)=>{
    try {
const {email,password,name}=req.body
const new_data= await User.create({email,password,name})
res.status(200).json({success:true,new_data})

        
    } catch (error) {
console.log(error)
res.status(500).json({success:false,error})

        
    }
}

exports.login_user=async(req,res)=>{
  try {
    const{email,password}=req.body
    const user=await User.find({"email":email});
if(user.length  > 0){
    const verify_user=await User.find({email:email,password:password })
    if(user_verify .length >0){
        res.status(200).json({
            success:true,verify_user,
        })
    }
    else{
        res.status(201).json({
            success:false,
            massage:"wrong credential"
        })
    }
}
else{
    res.status(201).json({
        success:false,
        massage:"email is not register"
    })
}

  } catch (error) {
    console.log(error)
    res.status(500).json({success:false,error})
  }

}

exports.get_all_users=async(req,res)=>{
    try {
        const all_users=await User.find({success:true,all_users})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,error})
    }
}
