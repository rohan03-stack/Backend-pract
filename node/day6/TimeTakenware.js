const express = require('express');

const fs = require('fs');

const port = 9000;

const app = express();


// example 1..

app.use((req, res, next) => {
    const startTime = new Date().getTime();
    next();
    const endTime = new Date().getTime();
    console.log(endTime - startTime);
    
})

const watchMan = (req, res, next) => {
    if(req.url == '/about') {
        next();
    }else {
        res.send('please come late...')
    }
}

app.use(watchMan);

app.get('/' , (req, res) => {
    console.log('hello i am from base route');
    res.send('welcome')
})

app.post('/contact' , (req, res) => {
    console.log('hello i am from base contact');
    res.send('contact')
})

app.post('/about' , (req, res) => {
    console.log('hello i am from base about');
    res.send('about')
})

app.post('/blogs' , (req, res) => {
    console.log('hello i am from base about');
    res.send('blogs')
});

app.listen(port, () => {
    console.log('port is active', port);
    
})