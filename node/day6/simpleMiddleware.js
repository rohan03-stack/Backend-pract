const express = require('express')

const port = 9500;

const app = express();

// app.use((req, res) => {
// console.log('hello i am from MiddleWare');
// next();
// console.log('i am next to the middlewarw function');


// });


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