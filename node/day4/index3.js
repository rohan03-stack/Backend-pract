const http = require("http");
const fs = require("fs");
const port = 8000;

const server = http.createServer((request, response) => {
    if(request.url === "/addData" && request.method === "POST") {
let str = "";
request.on("data", (chunk) => {
    str += chunk;
});
request.on("end", () => {
    console.log(str);
    
});
response.end("i got your data...")
    }

    else if (request.url=== '/movies'){
        const moviestream = fs.createReadStream("../day4/index.js", {
            encoding: "utf-8"
        })
        moviestream.pipe(response);
    }
})
server.listen(port, () => {
    console.log("server is running on" ,port);
    
})