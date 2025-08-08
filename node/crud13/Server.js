const express = require('express')
const cors = require('cors')
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const { Connections } = require('./config/db');
const { UserModule } = require('./module/User');

const { noteRoutes } = require('./Routes/NoteRoutes');
const { Authenticate } = require('./middleware/Authentication')

const app = express();

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome')

})

app.post('/signup', async (req, res) => {
 const{email, password, username} =req.body
    
    const userPresent = await UserModule.findOne({ email })

    if (userPresent) res.send(`Try loggin in,already exist`);
    try {
        bcrypt.hash(password, 5, async function (err, difficultpass) {
            const users = new UserModule({
                email,
                password: difficultpass,
                name: username
            });
            await users.save();
            return res.status(200).json({ success: true, message: "Signup Successful" })
        })
    } catch (err) {
        console.log(err);
        res.send("something went wrong please try again")

    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const checkUserDetails = await UserModule.find({ email });
        if (checkUserDetails.length > 0) {
            const hashPassword = checkUserDetails[0].password;
            bcrypt.compare(password, hashPassword, function (err, result) {

                if (result) {
                    const token = jwt.sign({ userID: checkUserDetails[0]._id }, 'hush');
                    res.send({ msg: 'login Succesfull', token: token });
                } else {
                    res.send(`login Unsuccesfull password ${err}`);
                }
            });
        } else {
            res.send('login Unsuccesfull');
        }
    } catch (err) {
        console.log(err);
        res.send('something went wrong! please try again leater...');
    }
});

app.get('/about', (req, res) => {
    res.send('this is about...');
});

app.use(Authenticate);
app.use(noteRoutes)




app.listen(process.env.Port, async () => {
    try {
        await Connections;
        console.log('Connected to DB Succesfully...');
    } catch (err) {
        console.log('Connected to DB Failed??');
        console.log(err);
    }
    console.log(`Server was connected to ${process.env.Port}`);
});