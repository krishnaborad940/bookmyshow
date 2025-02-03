const mongoose=require('mongoose')

const path=require('path')
const multer=require('multer')
const imagePath = '/uploads';


const MovieSchema=mongoose.Schema({
    category:{
        type:String,
        required:true
    }, rating:{
        type:String,
        required:true
    },
    Image:{
        type:String,
        // required:true
    },
    movieName:{
        type:String,
        required:true
    },
    movieTypes:{
        type:String,
        required:true
    },
    movieTime:{
        type:String,
        required:true
    },
    movieDate:{
        type:String,
        required:true
    }
})

const storageImage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,'..',imagePath))
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+'-'+Date.now())
    }
})

MovieSchema.statics.uploadeImage=multer({storage:storageImage}).single('Image')

MovieSchema.statics.ImgPath=imagePath

const Movie=mongoose.model('Movie',MovieSchema)

module.exports=Movie