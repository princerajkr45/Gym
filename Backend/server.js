import express from 'express';
import db from './database.js'
import userModel from './model.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.status(200).json({ "message": "successfully loaded" });
})

app.get('/about', (req, res) => {
    res.status(200).json({ "message": "About " });
})

app.post('/create', async (req, res) => {
    const { firstName, lastName, email, password, dob, phone, address, zipCode, state, city } = req.body

    const user = new userModel({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        dob: dob,
        phone: phone,
        address: address,
        zipCode: zipCode,
        state: state,
    })
    if (user) {
        const response = await user.save();
        res.status(201).json({ message: "success", data: response });
    } else {
        res.status(400).json({ message: "inavalid user data" })
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

   
    const user = await userModel.findOne({ email: email });

    if (user && user.password === password) {
        res.status(200).json({ message: "Login successful", user: user });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }


})


app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
});