
const commentData = require('../Model/commentModel')
const Movie=require('../Model/MovieModel')


module.exports.addMovie=async(req,res)=>{
    return res.render('addMovie')
}

module.exports.insertMovie=async(req,res)=>{
    console.log(req.body)

    console.log(req.file)
let newImage='';
    if(req.file){
        newImage=await Movie.ImgPath+'/'+req.file.filename
    }
    req.body.Image=newImage
    await Movie.create(req.body)
    return res.redirect('/viewMovie')
}

module.exports.viewMovie=async(req,res)=>{


    let MovieSearch='';
    if(req.query.blogSearch){
        MovieSearch=req.query.blogSearch
    }
    const MovieData=await Movie.find(
        {
            $or:[
                {movieName:{$regex:MovieSearch}}
            ]
        }
    )
    return res.render('viewMovie',{
        MovieData,MovieSearch
    })
}

module.exports.MovieDetails=async(req,res)=>{
const MovieData=await Movie.findById(req.query.MovieId)
const commentView=await commentData.find()
    return res.render('MovieDetails',{
        MovieData,commentView
    })
}

    module.exports.insertcomment=async(req,res)=>{
        await commentData.create(req.body)
        return res.redirect('back')
    }

 
