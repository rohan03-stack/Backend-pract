const fs = require('fs')
//how to read the file from your current environment
fs.rm("./notes.txt", {encoding: "utf-8"}, (err, data) => {
    if(err) {
console.log(err);

    }else{
        console.log(data);
        
    }
})
