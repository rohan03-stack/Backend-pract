// const express = require('express');

// const fs =require('fs');

// const Port = 8000;

// const app = express();

// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('add data...')
// })

// app.post('/students', (req, res) => {
//     fs.writeFileSync('db.json', JSON.stringify(req.body), 'utf-8')
//     res.send('accepted data...')
// })

// app.listen(Port, () => {
//     console.log('port was listening', Port);
    
// })

//   ..........................................read......................................
const express = require('express');

const fs =require('fs');

const Ports = 8500;

const app = express();

app.use(express.text());

app.get('/shoeData', (req, res) => {
  const show = fs.readFile('./students.txt', {encoding: 'utf-8'})
})

app.post('/students', (req, res) => {
    fs.writeFileSync(students.txt) , req.body, 'utf-8';
    res.send('accepted data...')
})

app.listen(Port, () => {
    console.log('port was listening', Ports);
    
})






