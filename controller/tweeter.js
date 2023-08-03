const Tweeter=require('../model/tweeter')


exports.create_tweet=async(req,res)=>{
    try {
        const {TEXT,user} = req.body
        console.log(TEXT,user)
        const new_tweet = await Tweeter.create({TEXT,user})
        console.log(new_tweet)
        res.status(200).json({
            success:true,
        })


    } catch (error) {
        res.status(500).json({
            success:false,
            error:error
        })
    }
}

exports.get_all_tweets=async(req,res)=>{

    try {
        
        const all_tweets = await Tweeter.find()
        res.status(200).json({
            success:true,
            all_tweets
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            error:error
        })
    }


}