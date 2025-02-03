const express=require('express')

const Movie = require('../Model/MovieModel')
const router=express.Router()

const movieCtl=require('../Controllers/movieController')

router.get('/',movieCtl.addMovie)

router.post('/insertMovie',Movie.uploadeImage,movieCtl.insertMovie)

router.get('/viewMovie',movieCtl.viewMovie)


router.get('/MovieDetails',movieCtl.MovieDetails)

router.post('/insertcomment',movieCtl.insertcomment)

// router.get('/viewComments',movieCtl.viewComments)

module.exports=router;