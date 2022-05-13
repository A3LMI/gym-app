const express = require('express');
const bodyParser = require('body-parser');
require('dotenv-flow').config();

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;


app.get("/health-check", (req, res) => {
    res.status(200).send({
        message: "Server is running on port: " + PORT
    });
})

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
})

module.exports = app;