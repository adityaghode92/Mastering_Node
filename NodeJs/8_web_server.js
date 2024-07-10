const http = require('http');

const server = http.createServer((req,res)=>{
    res.end("Hellow there im from other side");
});

// const server = http.createServer();

// server.on(()=>{
//     res.end("Hellow there im from other side");
// })

server.listen(8000,"127.0.0.1",()=>{
    console.log("I am listing");
});