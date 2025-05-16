const http = require("http");
const port = 7500;

const server = http.createServer((req, res) => {
if(req.url === "/")res.end("hello bitch");
else if(req.url === "/report")
    res.write("hello rohan , here we have reports.. \n ");
 res.write("hello rohan , here we have reports.. \n ");
  res.write("hello rohan , here we have reports.. \n");
     res.end();
});

server.listen(port, () => {
    console.log(`server is running on port`);   
})