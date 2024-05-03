const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.get('/', (req, res) => {
    res.send({
        "status": "CAPTURE_SUCCESSFUL"
    });
});

app.post('/', (req, res) => {
    res.send({
        "status": "CAPTURE_SUCCESSFUL"
    });
});

// Wrap Express app with serverless-http
module.exports.handler = serverless(app);
