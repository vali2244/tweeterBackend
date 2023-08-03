const Tweeter=require('../model/tweeter')


exports.create_tweet=async(req,res)=>{
    try {

        const {Text,user} = req.body
        const new_tweet = await Tweeter.create({Text,user})
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