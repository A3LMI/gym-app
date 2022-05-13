const express = require('express');
const bodyParser = require('body-parser');
require('dotenv-flow').config();
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

mongoose.connect(
    process.env.DB_URL,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .catch(err => {
        console.log("Error connecting to MongoDB: " + err)
    }
);

mongoose.connection.once("open", () => {
    console.log("Connected successfully to MongoDB!")
})

app.get("/health-check", (req, res) => {
    res.status(200).send({
        message: "Server is running on port: " + PORT
    });
})

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
})

module.exports = app;

