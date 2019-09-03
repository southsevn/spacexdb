const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/pages/index.html');
});

app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/pages/about.html');
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});
