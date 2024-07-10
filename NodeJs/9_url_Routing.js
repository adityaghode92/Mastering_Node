const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        //one way to write
        res.write("hellow for home side");
        res.end();
    }
    else if(req.url == "/about"){
        //second way to wrinte
        res.end("Hellow there im from about side");
    }
    else{
        res.writeHead(404,{"content-type" : "text/html"});
        res.end("<h1>page not exist 404</h1>");
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("I am listing");
});