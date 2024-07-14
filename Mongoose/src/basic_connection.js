const mongoose = require('mongoose')

//connect method return a promise
mongoose.connect("mongodb://localhost:27017/bbbkv")
.then(()=>{ console.log("connection successful")  })
.catch((err)=>{ console.log(err) })