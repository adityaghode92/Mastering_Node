const fs = require("fs");

const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  //FIRST WAY 

  // fs.readFile("input.txt", (err, data) => {
  //   res.end(data.toString());
  // });


  //2nd Way 
  
//Reading from stream
//create readable stream
//handle stream events ---> data , end and error

const rstream = fs.createReadStream("input.txt");

rstream.on('data',(chunkdata)=>{
  res.write(chunkdata);
})

rstream.on('end',()=>{
  res.end();
})

rstream.on('error',(error)=>{
  res.end(error);
})



});




server.listen(8000, "127.0.0.1");
