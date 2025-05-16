const http = require("http");

const server = http.createServer((req, res) => {
if(req.url === "/")res.end("hello rohan");
else if(req.url === "/report")
    res.end("hello rohan , here we have reports")
})

server.listen(8000, () => {
    console.log(`server is running on port`);
    
})