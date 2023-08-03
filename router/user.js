const express=require("express")
const { create_user, login_user, get_all_users } = require("../controller/user")
const router=express.Router()

router.route('/create/user').post(create_user)
router.route('/login/user').post(login_user)
router.route('/all/users').post(get_all_users)




module.exports=router