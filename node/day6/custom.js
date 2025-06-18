const express = require('express');

const fs = require('fs');

const port = 9800;

const app = express();

app.use(express.json())

const watchman = (req, res,next) => {
    const starttime = new Date().getTime();
    if (!req.body) req.body = {};
    req.body.server='hello server';
    next();
    const endtime = new Date().getTime();
    console.log(endtime - starttime);
    
};

const loggers = (req, res, next) => {
    fs.appendFileSync('./log.txt', '/n' + req.method + ''+ req.url, 'utf-8');
    next();
};

app.use(watchman, loggers)

app.get('/' , (req, res) => {
    console.log('e');
    console.log(req.body.server)
    console.log(req.body)
    res.send('welcome')
})


app.post('/contact' , (req, res) => {
    console.log('hello i am from base contact');
    res.send('contact')
})

app.listen(port, () => {
    console.log('port is active', port);
    
})