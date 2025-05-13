 const fs = require('fs')
fs.writeFile("./notes.txt", "hi bitch", {encoding: "utf-8"}, (err, data) => {
    if(err) {
console.log(err);

    }else{
        console.log(data);
        
    }
})