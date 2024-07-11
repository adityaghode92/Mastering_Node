const express = require('express');

const app = express();

// 1st way
app.get("/",(req,res)=>{
    res.send("hi from home page");
})

app.get("/about",(req,res)=>{
    res.status(200).send("hellow from about page");
})

//2nd way write() method
app.get("/about",(req,res)=>{
    res.write("hellow from about page");
    res.write("<h1>this is Html</h1>");
    res.send();
})


//Passing json data
app.get("/temp" , (req,res)=>{
    res.send([{
        id : 1,
        name : "Adi",
        job : "jobless"
    },
    {
        id : 2,
        name : "BeTaaL",
        job : "Dont Exist"
    }
]);
})


app.listen(8000,"127.0.0.1",()=>{
    console.log("Listening");
})