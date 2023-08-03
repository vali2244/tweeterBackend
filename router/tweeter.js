const express=require("express")
const { create_tweet, get_all_tweets } = require("../controller/tweeter")

const router=express.Router()

router.route('/create/tweet').post(create_tweet)
router.route('/all/tweets').get(get_all_tweets)



module.exports=router