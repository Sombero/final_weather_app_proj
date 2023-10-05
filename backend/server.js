const express = require('express');
const cors = require('cors');
const PORT = 8080;

const app = express();
app.use(express.json());
app.use(cors());

// TODO
// Setup MongoDB client 
// Use PROCESS.ENV variables

app.post('/register', (req, res) => {
    // TODO 
    // Check if user exists on DB
    // Add user to mongoDB if user doesn't already exist
    // Otherwise return an error

    const dataAsJson = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    }
    console.log(dataAsJson);
    res.sendStatus(200);
});

app.post('/login', (req, res) => {
    // TODO
    // Check if user password matches password on db

    const dataAsJson = {
        email: req.body.email,
        password: req.body.password,
    }

    console.log(dataAsJson);
    res.sendStatus(200);
})


app.listen(PORT, () => {
    console.log(`server is running on ${PORT} port`);
});