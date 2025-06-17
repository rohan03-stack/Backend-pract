const { log } = require('console');
const express = require('express');

const fs = require('fs');

const port = 9800;

const app = express();


// example:1;
//acedb


app.use((res,req,next) => {
console.log("a");
next();
console.log("b");


})

// example:2;


app.use((res,req,next) => {
console.log("c");
next();
console.log("d");


})

app.get('/' , (req, res) => {
    console.log('e');
    res.send('welcome')
})

app.listen(port, () => {
    console.log('port is active', port);
    
})

