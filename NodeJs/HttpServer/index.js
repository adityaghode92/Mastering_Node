const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const data = fs.readFileSync(`${__dirname}/UserAPI/userapi.json`, "utf-8");

    if(req.url == '/'){
        res.end("this is home page");
    }
    else if(req.url == "/contact") {
      res.writeHead(200,{"content-type" : "application/json"})
      res.end(data);
    }
    else{
        res.writeHead(404,{"content-type" : "text/html"})
        res.end("<h1>Error 404</h1>");
    }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("done");
});
