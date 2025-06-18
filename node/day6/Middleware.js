const express = require('express');

const fs = require('fs');

const cors = require("cors")

const port = 9800;

const { studentRouter} = require("./Routes/Student.Routes");
const { lectureRoute} = require("./Routes/Lecturet.Routes");

const app = express();

app.use(express.json())
app.use(express.text())


app.use(
    cors({
        origin: "example:website",

        methods: "GET"
    })
);

app.use ("/lecture", lectureRoute);



app.get('/' , (req, res) => {
    console.log('e');
    
    res.send('welcome')
})


app.post('/addstudents' , (req, res) => {
    console.log(req.body);
    res.send('got the data')
})

app.get('/contacts' , (req, res) => {
    console.log("hello im contact");
    res.send('contact')
})

app.get('/about' , (req, res) => {
    console.log("hello im  about");
    res.send('contact')
})




app.listen(port, () => {
    console.log('port is active', port);
    
})
