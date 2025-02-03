const express=require('express')

const port =8000;

const app=express()
const path=require('path')

// const db=require('./config/db')
const mongoose=require('mongoose')
 mongoose.connect("mongodb+srv://boradkrishna940:ZYQJTHTvp81MCI9X@first.7vdki.mongodb.net/MovieDetails",{
useNewUrlParser: true,
useUnifiedTopology: true
})
.then((res)=>console.log("connrcted"))
.catch((err)=>console.log(err))

app.use(express.urlencoded())


app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'assets')));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/',require('./Routers/movieRouter'))

app.listen(port,(err)=>{
    if(err){
        console.log(err)
        return false
    }
    console.log("port is satrted:-"+port)
})