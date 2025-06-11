const express = require('express');

const fs =require('fs');

const Port = 8000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('add data...')
})

app.post('/students', (req, res) => {
    fs.writeFileSync('db.json', JSON.stringify(req.body), 'utf-8')
    res.send('accepted data...')
})

app.listen(Port, () => {
    console.log('port was listening', Port);
    
})





