const mongoose=require('mongoose')


const commentSChema=mongoose.Schema({
    comment:{
        type:String,
        require:true
    }
})

const commentData=mongoose.model('commentData',commentSChema)

module.exports=commentData;