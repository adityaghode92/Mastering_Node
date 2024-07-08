
const fs = require("fs");

fs.writeFile("read.txt", "hey there",(err)=>{
    console.log(err);
});


fs.appendFile("read.txt", "my name is Aditya",(err)=>{
    console.log("data added");
});

fs.readFile("read.txt","UTF-8",(err,data)=>{
    console.log(data);
})

fs.unlink("read.txt",()=>{});
