const express = require('express');

const app = express();

app.use (express.jason());

app.get('/', (req, res) => {
    res.send('accepted data...')
});

app.post('/addDetails', (req, res) => {
    console.log(req);
    console.log(req.body);
    res.send('accepted data from past....')
});

app.listen(7000, () => {
    console.log('port listen on 7000');
    
})